from django.contrib.auth import get_user_model, models, authenticate

from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status

from blog.permissions import IsAdminOrReadOnly
from .serializers import UserSerializer, GroupSerializer, RegistrationSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = get_user_model().objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAdminOrReadOnly]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = models.Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAdminUser]


class LoginView(APIView):
    """login endpoint"""
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        if username is None or password is None:
            return Response({'error': 'Please provide both username and password'},
                            status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(username=username, password=password)
        if not user:
            return Response({'error': 'Invalid Credentials'},
                            status=status.HTTP_404_NOT_FOUND)
        token, _ = Token.objects.get_or_create(user=user)

        return Response({"token": f"{token}", "user": user.pk}, status=status.HTTP_200_OK)


class LogoutView(APIView):
    """logout endpoint"""
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        return Response({"message": "logout"}, status=status.HTTP_200_OK)


class SelfCheckView(APIView):
    """check for verification token endpoint"""
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        return Response({"user": {"id": request.user.id,
                                  "username": request.user.username}},
                        status=status.HTTP_200_OK)


class RegistrationView(APIView):
    """registration view endpoint"""
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        serializer = RegistrationSerializer(data={'username': username,
                                                  'password': password})
        if serializer.is_valid():
            val_date = serializer.validated_data
            get_user_model().objects.create_user(**val_date)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({"erorrs": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
