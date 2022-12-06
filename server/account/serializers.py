from rest_framework import serializers
from django.contrib.auth import get_user_model, models
from rest_framework.validators import UniqueTogetherValidator

from blog.models import Post
from comments.serializers import CommentSerializer


class UserPostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title']


class UserSerializer(serializers.ModelSerializer):
    posts = UserPostsSerializer(many=True)
    comments = CommentSerializer(many=True)
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'email', 'groups', 'posts', 'comments']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Group
        fields = ['id', 'name']


class RegistrationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=20)

    default_validators = [
        UniqueTogetherValidator(
            queryset=get_user_model().objects.all,
            fields=['username', 'password']
        )
    ]