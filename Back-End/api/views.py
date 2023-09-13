from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import TaskSerializer
from .models import Task

# Create your views here.

#Obtener Todos
@api_view(['GET'])
def ShowAll(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

#Obtener solo uno
@api_view(['GET'])
def ViewTask(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

#Crear una Tarea
@api_view(['POST'])
def CreateTask(request):
    serializer = TaskSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)


#Actualiza una Tarea
@api_view(['POST'])
def UpdateTask(request,pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)


#Borrar una Tarea
@api_view(['GET'])
def DeleteTask(request,pk):
    task = Task.objects.get(id=pk)
    task.delete()
        
    return Response('Items delete successfully')




#Codigo no utilizado

""" @api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/product-list',
        'Deatil View': '/product-detail/<int:id>',
        'Create': '/product-create/',
        'Update': '/product-update/<int:id>',
        'Delete': '/product-delete/<int:id>',
    }
    
    return Response(api_urls) """