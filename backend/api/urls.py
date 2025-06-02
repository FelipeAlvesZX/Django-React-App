from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, RegisterView, LoginView, LogoutView, UserDetailView

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [

    path('', include(router.urls)),
    
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    
    path('users/me/', UserDetailView.as_view(), name='user-detail'),
]