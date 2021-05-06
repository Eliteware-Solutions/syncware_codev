from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, status
from sw_bridge.models import SyncwareControl
from sw_bridge.serializers import SyncwareSerializer, StartServerSerializer, StopServerSerializer, RestartServerSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from server_core import sw_server_platfor_api
import argparse

parser = argparse.ArgumentParser()

server_obj = sw_server_platfor_api.SyncwareServer()


# Create your views here.
class SyncwareView(generics.ListAPIView):
    queryset = SyncwareControl.objects.all()
    serializer_class = SyncwareSerializer


class StartServerView(APIView):
    serializer_class = StartServerSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        print(serializer.is_valid())

        # Fire up server regardless of credentials. Don't care for now (Testing phase)        server_obj.start_server()
        server_obj.start_server()

        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user_start_sw = serializer.data.get('user_start_sw')
            host = self.request.session.session_key
            queryset = SyncwareControl.objects.filter(host=host)
            if queryset.exists():
                started_server = queryset[0]
                started_server.username = username
                started_server.password = password
                started_server.user_start_sw = user_start_sw
                started_server.save(update_fields=[
                    'username','password','user_start_sw'
                ])

                # TODO: OPC-UA python does not include username / password authentication capabilities as of now.
                # Ignore arguments for now and just fire up the OPC-UA server

                # parser.add_argument(started_server.username)
                # parser.add_argument(started_server.password)
                # args = parser.parse_args()

                # server_obj = sw_server_platfor_api.SyncwareServer(args.username, args.password)
                # server_obj.start_server()

                return Response(SyncwareSerializer(started_server).data, status=status.HTTP_200_OK)
            else:
                started_server = SyncwareControl(host=host, username=username, password=password, user_start_sw=user_start_sw)
                started_server.save()
                return Response(SyncwareSerializer(started_server).data, status=status.HTTP_201_CREATED)

        else:
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)



class StopServerView(APIView):
    serializer_class = StopServerSerializer
    stopped = False
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
      
        # Stop server regardless of credentials. Don't care for now (Testing phase)        server_obj.start_server()
    
        stopped = server_obj.stop_server()
        if stopped:
            return Response(stopped, status=status.HTTP_200_OK)      
        else:
            return Response({'Bad Request': 'Unable to stop...'}, status=status.HTTP_400_BAD_REQUEST)


class RestartServerView(APIView):
    serializer_class = RestartServerSerializer
    restart = False
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        # Restart server regardless of credentials. Don't care for now (Testing phase)        server_obj.start_server()
        restart = server_obj.restart_server()
            
        if restart:
            return Response(restart, status=status.HTTP_200_OK)
        else:
            return Response({'Bad Request': 'Unable to restart...'}, status=status.HTTP_400_BAD_REQUEST)
