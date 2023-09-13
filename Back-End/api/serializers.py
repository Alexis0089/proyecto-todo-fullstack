from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        
        #Si solo quiero el titulo de la tabla
        #field = ('title')
        #Si solo quiero 2 campos
        #field = ('title','description')
        #Si quiero todos los campos
        #field = '__all__'
        