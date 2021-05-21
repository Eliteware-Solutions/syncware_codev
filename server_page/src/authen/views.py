# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate
from django.http import HttpResponse, HttpResponseRedirect
from .forms import SignUpForm, UserForm, UserCreateForm
from django.views.generic import ListView
from .models import CustomUser

def home(request):
    return render(request, 'auth/home.html')


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return HttpResponseRedirect('/login/')
    else:
        form = SignUpForm()
    return render(request, 'auth/signup.html', { 'form' : form })

class ListUserView(ListView):
    model = CustomUser
    template_name = 'user/user_list.html'

def detail_view(request, id):
    context ={}
    context["data"] = CustomUser.objects.get(id = id)
          
    return render(request, "user/user_detail_view.html", context)

def update_view(request, id):
    context ={}
    obj = get_object_or_404(CustomUser, id = id)
    form = UserForm(request.POST or None, instance = obj)
  
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/user/"+id+"/get")
    context["form"] = form
    return render(request, "user/user_update.html", context)

def delete_view(request, id):
    context ={}
    obj = get_object_or_404(CustomUser, id = id)
  
    if request.method =="POST":
        obj.delete()
        return HttpResponseRedirect("/user/user_list/")
    
    return render(request, "user/user_delete.html", context)

def create_view(request):
    context ={}
    form = UserCreateForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect("/user/user_list/")
        
    context['form']= form
    return render(request, "user/user_create.html", context)