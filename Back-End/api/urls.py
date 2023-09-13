from django.urls import path
from . import views

urlpatterns = [
    #path('', views.apiOverview, name='apiOverview'),
    path('task-list/', views.ShowAll, name='task-list'),
    path('task-detail/<int:pk>', views.ViewTask, name='task-detail'),
    path('task-create/', views.CreateTask, name='task-create'),
    path('task-update/<int:pk>', views.UpdateTask, name='task-update'),
    path('task-delete/<int:pk>', views.DeleteTask, name='task-delete')
    
]

