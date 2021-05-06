
from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from sw_bridge.views import SyncwareView, StartServerView, StopServerView, RestartServerView


urlpatterns = [
    path('control/', SyncwareView.as_view()),
    path('start/', StartServerView.as_view()),
    path('restart/', RestartServerView.as_view()),
    path('stop/', StopServerView.as_view()),    
]
