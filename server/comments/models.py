from django.contrib.auth import get_user_model
from django.db import models

from blog.models import Post


class Comment(models.Model):
    text = models.TextField()
    author = models.ForeignKey(get_user_model(), related_name='comments', on_delete=models.CASCADE)
    post = models.ForeignKey(Post, related_name="comments", on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    parent_comment = models.OneToOneField("Comment", blank=True, null=True, on_delete=models.CASCADE)
