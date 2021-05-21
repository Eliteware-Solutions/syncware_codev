"""syncware_server_web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from page.views import landing_view, home_view, logic_view, contact_view, about_view, status_srv_view, posts_list, update_view
# from frontend.views import index
from frontend_b.views import index, strt_srv_view, rstrt_srv_view, stp_srv_view
# from sw_bridge.views import mock

from django.contrib.auth import views as auth_views
from authen import views as authen_views

app_name = 'page'


urlpatterns = [
    #path('', views.home, name='home'),
    path('', auth_views.LoginView.as_view(template_name='auth/login.html'), name='login'),
    path('login/', auth_views.LoginView.as_view(template_name='auth/login.html')),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', authen_views.signup, name='signup'),
    #path('', index),
    path('accounts/', include('accounts.urls')),
    path('home/', home_view, name='home'),
    path('logic/', logic_view, name='logic'),
    path('contact/', contact_view),
    path('about/', about_view),
    path('posts-list', posts_list.as_view(), name="posts-lists"),
    path('post/<slug:pk>/', update_view.as_view(), name="posts-updates"),
    path('status_srvr/', status_srv_view),
    # path('start_srvr/', strt_srv_view),
    # path('restart_srvr/', rstrt_srv_view),
    # path('stop_srvr/', stp_srv_view),
    path('', include('sw_bridge.urls'), name='start'),
    # path('', include('sw_bridge.urls'), name='restart'),
    # path('', include('sw_bridge.urls'), name='stop'),
    # path('home/status_srvr/', status_srv_view),
    # path('home/start_srvr/', strt_srv_view),
    # path('home/restart_srvr/', rstrt_srv_view),
    # path('home/stop_srvr/', stp_srv_view),
    path('admin/', admin.site.urls),
    path('about_syncware', index),
    path('project_page', index),
    path('user/', include('authen.urls'), name='user')
    # path('', include('frontend.urls'))
]
