from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, basename='tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),  # Asegúrate de que la ruta esté vacía para incluir las rutas del router
]