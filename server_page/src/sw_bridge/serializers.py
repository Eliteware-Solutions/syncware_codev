from rest_framework import serializers
from sw_bridge.models import SyncwareControl

class SyncwareSerializer(serializers.ModelSerializer):
    class Meta:
        model = SyncwareControl
        fields = ('id', 
                    'code', 
                    'host',
                    'username', 
                    'password',
                    'user_start_sw',
                    'user_restart_sw',
                    'user_stop_sw',
                    'created_at'
                    )


class StartServerSerializer(serializers.ModelSerializer):
    user_start_sw = serializers.BooleanField(required=False)
    
    class Meta:
        model = SyncwareControl
        fields = ('username', 
                'password',
                'user_start_sw')


class StopServerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SyncwareControl
        fields = (
                'user_stop_sw'
                )

class RestartServerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SyncwareControl
        fields = (
                'user_restart_sw'
                )