from rest_framework import permissions

class CommentDeleteIsOwnerOrAdmin(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method == "DELETE":
            return bool(request.user == obj.author or request.user.is_staff)