from rest_framework import serializers

from comments.models import Comment


class ParrentCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'date', 'post']


class CommentSerializer(serializers.ModelSerializer):
        parent_comment = ParrentCommentSerializer(default=None)
        author = serializers.PrimaryKeyRelatedField(
            read_only=True,
            default=serializers.CurrentUserDefault()
        )
        class Meta:
            model = Comment
            fields = ['id', 'text', 'author', 'date', 'post', 'parent_comment']

        def save(self, **kwargs):
            """Include default for read_only `user` field"""
            kwargs["author"] = self.fields["author"].get_default()
            return super().save(**kwargs)
