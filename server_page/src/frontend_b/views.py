from django.shortcuts import render

from django.contrib.auth.decorators import login_required


#from server_core import sw_server_platform

# server_obj = sw_server_platform.SyncwareServer()



# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')


@login_required(login_url="/accounts/login/")
def strt_srv_view(request, *args, **kwargs):
    #server_core.sw_server_menu.menu("init_server")
    server_obj.start_server()
    return render(request, 'frontend/index.html', {})

@login_required(login_url="/accounts/login/")
def rstrt_srv_view(request, *args, **kwargs):
    try:
        server_obj.restart_server()
    except Exception as err_restart:
        print("Server object never started.", err_restart)
        pass
    return render(request, 'frontend/index.html', {})

@login_required(login_url="/accounts/login/")
def stp_srv_view(request, *args, **kwargs):
    #server_core.sw_server_menu.menu("stop_server")
    server_obj.stop_server()
    return render(request, 'frontend/index.html', {})