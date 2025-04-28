from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

class TaskPagination(PageNumberPagination):
    page_size=16


class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all().order_by('-id')
    pagination_class=TaskPagination