from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from .views import ListUserView, detail_view, update_view, delete_view, create_view

urlpatterns = [
    path('user_list/', ListUserView.as_view(), name='user-list'),
    path('<id>/get/', detail_view, name='user_detail'),
    path('<id>/update/', update_view, name='user_update'),
    path('<id>/delete/', delete_view, name='user_delete'),
    path('create/', create_view, name='user_create')
]