from rest_framework import serializers

from comments.models import Comment


class ParentCommentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'date', 'post']


class CommentSerializer(serializers.ModelSerializer):
        parent_comment = ParentCommentSerializer()
        author = serializers.PrimaryKeyRelatedField(
            read_only=True,
            default=serializers.CurrentUserDefault()
        )
        class Meta:
            model = Comment
            fields = ['id', 'text', 'author', 'date', 'post', 'parent_comment']

        def save(self, **kwargs):
            """Include default for read_only `author` field"""
            kwargs["author"] = self.fields["author"].get_default()
            return super().save(**kwargs)

        def create(self, validated_data):
            parent_comment_data = validated_data.pop('parent_comment')
            parent_comment = Comment.objects.get(id=parent_comment_data['id'])
            comment = Comment.objects.create(**validated_data, parent_comment=parent_comment)
            return comment
