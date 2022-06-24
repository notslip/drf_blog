from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    PUBLIC = "PB"
    MODERATED = "MD"
    NOTPUBLIC = "NP"
    STATUS_CHOICES=[
        (PUBLIC, "public"),
        (MODERATED, "moderated"),
        (NOTPUBLIC, "not published")
    ]

    title = models.CharField(max_length=150, db_index=True)
    slug = models.SlugField(max_length=150, unique=True)
    body = models.TextField(db_index=True, blank=True)
    pub_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField('Tag', related_name='posts', blank=True)
    author = models.ForeignKey(User, related_name='posts', on_delete=models.CASCADE, null=True, blank=True)
    status = models.CharField(max_length=2, choices=STATUS_CHOICES, default=MODERATED)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-pub_date"]


class Tag(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)

    def __str__(self):
        return self.title

