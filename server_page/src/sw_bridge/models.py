from django.db import models
from django import forms
import string
import random

def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if SyncwareControl.objects.filter(code=code).count() == 0:
            break

    return code

# Create your models here.
class SyncwareControl(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=32, default="", unique=True)
    username = models.CharField(max_length=32, default="", unique=True)
    password = models.CharField(max_length=32, unique=True)
    user_start_sw = models.BooleanField(null=False, default=False)
    user_restart_sw = models.BooleanField(null=False, default=False)
    user_stop_sw = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True)
