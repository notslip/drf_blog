from rest_framework import serializers
from django.contrib.auth import get_user_model, models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['url', 'id', 'username', 'email', 'groups', 'posts']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Group
        fields = ['url', 'name']