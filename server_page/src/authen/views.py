# Create your views here.
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, get_user_model
from django.http import HttpResponse, HttpResponseRedirect
from .forms import SignUpForm, UserForm, UserCreateForm
from django.views.generic import ListView, TemplateView
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.backends import ModelBackend
from .serializers import CustomUserSerializer, CustomUserPSerializer, CustomUserLoginSerializer, UserSerialize, DeviceSerialize
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers as core_serializers
from django.core.exceptions import MultipleObjectsReturned, ObjectDoesNotExist
import json
from opcua import ua, Client
import time
from .consumers import ChatConsumer
import datetime
from asgiref.sync import async_to_sync

consumerObj = object

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


class EmailBackend():
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return HttpResponse('Invalid')
        else:
            if user.check_password(password):
                return user
        return HttpResponse('Invalid')
    
    def get_user(self, uid):
        try: 
            return CustomUser.objects.get(pk=uid)
        except MultipleObjectsReturned:
            return CustomUser.objects.filter(id=uid).order_by('id').first()
        else:
            return HttpResponse('Invalid')     
    

class UserLoginView(APIView):
    def get_serializer_class(self):
        return CustomUserLoginSerializer
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        content = {'message': 'Username or password is invalid'}

        try:
            user = authenticate(username=username, password=password)
        
            if isinstance(user, HttpResponse):
                return Response(content)
            else:
                userserialize = UserSerialize()
                objreturn = userserialize.change(user)
                return Response(objreturn) 
        except (MultipleObjectsReturned, ObjectDoesNotExist):
            return  Response({'message':'many users with same username'})

    serializer_class = CustomUserLoginSerializer    

class ListUserView(viewsets.ModelViewSet):
    def get_serializer_class(self):
        if self.request.method == 'POST':
            serializer_class = CustomUserPSerializer
            return CustomUserPSerializer
        else:
            serializer_class = CustomUserSerializer
            return CustomUserSerializer

    def create(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        is_admin = request.data.get('is_admin')
        is_active = request.data.get('is_active')
        if(is_admin == "true"):
            is_admin = True
        else:
            is_admin = False

        if(is_active == "true"):
            is_active = True
        else:
            is_active = False    
        
        #print(str(username+""+password+""+email+""+is_admin+""+is_active))
        payload = {
            'username' : username,
            'password' : password,
            'email'    : email,
            'is_admin' : is_admin,
            'is_active': is_active
        }
        try:
            user = get_user_model().objects.create_user(**payload)
        except:
            return Response({'Data' : 'Invalid'})
        else:
            userserialize = UserSerialize()
            objreturn = userserialize.change(user)
            return Response(objreturn) 
        
        return Response(user)

    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    #template_name = 'user/user_list.html'

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

valueList = []

class DataHandler():
    def datachange_notification(self, node, value, data):
        print("Data change", value)
        valueList.append(value)
        if len(valueList) == 2:
            DictValues = {'Temperature' : valueList[0], 'Pressure' : valueList[1]}
            consumerObj.sendData(DictValues)
            valueList.clear()

class Device(APIView):

    def get(self, request):
        client = Client("opc.tcp://127.0.0.1:4840")

        try:
            client.connect()
            global consumerObj
            consumerObj = ChatConsumer()
            time.sleep(10)
            while True:
                root = client.get_root_node()
        
                Pressure = root.get_child(["0:Objects", "2:Parameters", "2:Pressure"])
                Temperature = root.get_child(["0:Objects", "2:Parameters", "2:Temperature"])
                Time = root.get_child(["0:Objects", "2:Parameters", "2:Time"])
                obj = root.get_child(["0:Objects", "2:Parameters"])
                
                listNodes = [Temperature, Pressure]
                
                sub = client.create_subscription(500, DataHandler())
                handle = sub.subscribe_data_change(listNodes)
                
                try:
                    while True:
                        time.sleep(1)
                except KeyboardInterrupt:
                    client.disconnect()        
                return Response("response")
        finally:
            client.disconnect()
