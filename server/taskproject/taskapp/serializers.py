from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Task
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user






class TodoSerializer(serializers.ModelSerializer):
    user=serializers.CharField(read_only=True)
    class Meta:
        model=Task
        fields = ['id','title', 'description', 'status', 'due_date', 'user']
    def create(self,validated_data):
        user=self.context.get("user")
        return Task.objects.create(user=user,**validated_data)