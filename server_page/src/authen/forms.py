from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser


class SignUpForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = UserCreationForm.Meta.fields 
  

class UserForm(forms.ModelForm):

    class Meta:
        model = CustomUser
        username = forms.CharField(max_length=20)     
        email = forms.CharField(max_length=30)
        is_admin = forms.BooleanField

        fields = ['username', 'email', 'is_admin']

class UserCreateForm(forms.ModelForm):

    class Meta:
        model = CustomUser
        username = forms.CharField(max_length=20)  
        password = forms.CharField(max_length=20,widget=forms.PasswordInput)   
        email = forms.CharField(max_length=30)
        is_admin = forms.BooleanField
        is_staff = forms.BooleanField
        is_superuser = forms.BooleanField
        widgets = {
            'password': forms.PasswordInput(),
        }
        
        fields = ['username', 'password', 'email', 'is_admin', 'is_staff', 
                    'is_superuser']