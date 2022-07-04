from rest_framework import serializers
from blog.models import Post, Tag


class PostSerializer(serializers.HyperlinkedModelSerializer):
    author = serializers.HiddenField(default=serializers.CurrentUserDefault)

    class Meta:
        model = Post
        fields = "__all__"


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"

