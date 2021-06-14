from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from .views import ListUserView, detail_view, update_view, delete_view, create_view, Device
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', ListUserView)

app_name = "authen"

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('device', Device.as_view(), name="device")
    #path('user_list/', ListUserView.as_view(), name='user-list'),
    #path('<id>/get/', detail_view, name='user_detail'),
    #path('<id>/update/', update_view, name='user_update'),
    #path('<id>/delete/', delete_view, name='user_delete'),
    #path('create/', create_view, name='user_create')
]