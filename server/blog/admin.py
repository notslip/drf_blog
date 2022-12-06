from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin

from blog.models import Post, Tag

TokenAdmin.raw_id_fields = ['user']

admin.site.register(Post)
admin.site.register(Tag)

