from django.db import models

# Create your models here.

class Task(models.Model):
    title= models.CharField(max_length=100)
    description= models.CharField(max_length=250)
    
    def __str__(self):
     return self.title
 
 
    
    #title= models.CharField(max_length=100, null=False, blank=False)
    
    #price = models.DecimalField(max_digits=4, decimal_places=2)
    
    #description= models.TextField()
    #stars = models.IntegerField()
    
