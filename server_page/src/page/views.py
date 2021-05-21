from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.utils.timezone import get_current_timezone_name

from django.views.generic.edit import UpdateView
from django.views.generic.list import ListView

from django.contrib.auth.decorators import login_required

from .models import Posts

#from server_core import sw_server_platform

# server_obj = sw_server_platform.SyncwareServer()


class posts_list(ListView):
    model = Posts
    fields = '__all__'
    template_name = 'posts-list.html'
    

class update_view(UpdateView):
    model = Posts
    fields = '__all__'
    template_name = 'update_form.html'
    success_url = "/posts-list"



# Create your views here.



# @csrf_exempt 
def landing_view(request, *args, **kwargs):
    return render(request, "accounts/login.html", {})

@login_required(login_url="/accounts/login/")
def home_view(request, *args, **kwargs):
    #return HttpResponse("<h1> Hello World </h1>")
    home_context = {}
    return render(request, "home.html", home_context)

@login_required(login_url="/accounts/login/")
def logic_view(request, *args, **kwargs):
    #return HttpResponse("<h1> Hello World </h1>")
    logic_context = {}
    return render(request, "logic.html", logic_context)


def contact_view(request, *args, **kwargs):
    #return HttpResponse("<h1> Contact Page </h1>")
    contact_context = {
        "Contacts": [{"Maintainer": ("Walter Pintor","walterpintor@syncware.ai", "Technoking", "ext 1")},
                     {"Maintainer": ("Dirk-Jan van Veen","dirkjanvanveen@syncware.ai", "Coin master", "ext 2")}],
    }
    return render(request, "contact.html", contact_context)

@login_required(login_url="/accounts/login/")
def status_srv_view(request, *args, **kwargs):
    status_srv = server_obj.is_server_on()
    status_context = {
        "status": status_srv
    }
    return render(request, "home.html", status_context)

@login_required(login_url="/accounts/login/")
def strt_srv_view(request, *args, **kwargs):
    #server_core.sw_server_menu.menu("init_server")
    server_obj.start_server()
    return render(request, "home.html", {})

@login_required(login_url="/accounts/login/")
def rstrt_srv_view(request, *args, **kwargs):
    try:
        server_obj.restart_server()
    except Exception as err_restart:
        print("Server object never started.", err_restart)
        pass
    return render(request, "home.html", {})

@login_required(login_url="/accounts/login/")
def stp_srv_view(request, *args, **kwargs):
    #server_core.sw_server_menu.menu("stop_server")
    server_obj.stop_server()
    return render(request, "home.html", {})


def about_view(request, *args, **kwargs):
    #return HttpResponse("<h1> About Page </h1>")
    about_context = {
        "server_name": "Syncware Server",
        "server_purpose": "Connectivity and simplification",
        "server_other": ""
    }
    return render(request, "about.html", about_context)