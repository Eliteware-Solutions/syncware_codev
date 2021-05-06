from django.contrib import admin
from django.urls import path

from django.conf.urls import url
from accounts.views import signup_view, login_view, logout_view

app_name = "accounts"

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),

]