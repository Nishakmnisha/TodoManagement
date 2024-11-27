from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet,ViewSet
from .serializers import UserSerializer,TaskSerializer,TodoSerializer
from .models import Task
from rest_framework.response import Response
from rest_framework import authentication,permissions
# from rest_framework.authentication import authenticate
# from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.views import APIView



class UserRegisterView(ViewSet):
    def create(self,request,*args,**kwargs):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(serializer.errors)


class TodoViewSet(ModelViewSet):
    authentication_classes=[authentication.TokenAuthentication]
    queryset = Task.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)
class TaskListCreate(ModelViewSet):
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=TodoSerializer
    queryset=Task.objects.all()

    
    def create(self,request,*args,**kwargs):
        serializer=TodoSerializer(data=request.data,context={"user":request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)


