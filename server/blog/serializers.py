from rest_framework import serializers
from account.serializers import UserSerializer
from account.models import User
from blog.models import Post, Tag
from comments.serializers import CommentSerializer


class PostAuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title']


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)
    author = PostAuthorSerializer()
    tags = TagSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'author', 'tags', 'pub_date', 'update_date', 'comments']



