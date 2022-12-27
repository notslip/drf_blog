
from rest_framework import viewsets, generics
from rest_framework import permissions
from rest_framework.mixins import CreateModelMixin, DestroyModelMixin

from .permissions import CommentDeleteIsOwnerOrAdmin
from comments.models import Comment
from comments.serializers import CommentSerializer


class CommentCreateDeleteViewSet(CreateModelMixin, DestroyModelMixin, viewsets.GenericViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, CommentDeleteIsOwnerOrAdmin]

