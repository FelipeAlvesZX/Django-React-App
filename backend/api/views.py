from rest_framework import viewsets, permissions, status, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from .models import Item
from .serializers import ItemSerializer, UserSerializer, RegisterSerializer
from .permissions import IsOwner

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "message": "User registered successfully",
        }, status=status.HTTP_201_CREATED)


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        
        if email:
            try:
                user = User.objects.get(email=email)
                username = user.username
            except User.DoesNotExist:
                return Response({
                    "message": "No account found with this email address"
                }, status=status.HTTP_404_NOT_FOUND)
        else:
            username = request.data.get('username')
            
        user = authenticate(username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                "token": token.key,
                "user": UserSerializer(user).data
            })
        return Response({
            "message": "Invalid credentials"
        }, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def post(self, request):
        try:
            request.user.auth_token.delete()
            return Response({"message": "Successfully logged out"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]
    
    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)