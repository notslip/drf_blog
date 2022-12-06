
from rest_framework import viewsets

from .models import Post, Tag
from .serializers import PostSerializer, TagSerializer
from .permissions import IsOwnerOrReadOnly, IsAdminOrReadOnly


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly, IsAdminOrReadOnly]


class TagViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tags to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    permission_classes = [IsAdminOrReadOnly]



