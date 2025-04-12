from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=200)
    descripcion=models.TextField(blank=True)
    completada=models.BooleanField(default=False)
    def __str__(self):
        return self.title

    