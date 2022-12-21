from rest_framework import serializers

from comments.models import Comment


class ParrentCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'date', 'post']


class CommentSerializer(serializers.ModelSerializer):
        parent_comment = ParrentCommentSerializer(read_only=True)
        class Meta:
            model = Comment
            fields = ['id', 'text', 'author', 'date', 'post', 'parent_comment']