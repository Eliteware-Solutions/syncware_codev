from django.contrib import admin

# Relative import
from .models import Device
# Register your models here.

admin.site.register(Device)
