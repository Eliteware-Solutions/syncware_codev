from django.db import models

# Create your models here.
class Device(models.Model):
    title       = models.CharField(max_length=120)
    robot_brand = models.TextField(default="ROS")
    description = models.TextField()
    date        = models.DateField(auto_now_add=True)
    other       = models.TextField(default="Other comments")
