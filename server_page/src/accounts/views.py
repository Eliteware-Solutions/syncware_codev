from django.shortcuts import render, redirect

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout

# Create your views here.
def signup_view(request, *args, **kwargs):
    return render(request, "accounts/signup.html", {})

def login_view(request, *args, **kwargs):
    login_context = {}
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    
    login_context = {'form': form}

    return render(request, 'accounts/login.html', login_context)

def logout_view(request, *args, **kwargs):
    if request.method == 'POST':
        logout(request)
        return redirect('/')
