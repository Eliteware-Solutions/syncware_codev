from django.db import models

# Create your models here.
class Controls(models.Model):
    title       = models.TextField()
    description = models.TextField()
    other       = models.TextField(default="Other comments")