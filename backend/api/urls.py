from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, RegisterView, LoginView, LogoutView, UserDetailView

# Create a router for ViewSets
router = DefaultRouter()
router.register(r'items', ItemViewSet)

# Define URL patterns
urlpatterns = [
    # ViewSet routers
    path('', include(router.urls)),
    
    # Authentication endpoints
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),
    
    # User endpoints
    path('users/me/', UserDetailView.as_view(), name='user-detail'),
]