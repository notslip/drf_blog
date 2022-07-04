
from django.contrib.auth import get_user_model, models

from rest_framework import viewsets
from rest_framework import permissions


from blog.permissions import IsAdminOrReadOnly
from .serializers import UserSerializer, GroupSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = get_user_model().objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrReadOnly]

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = models.Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAdminUser]