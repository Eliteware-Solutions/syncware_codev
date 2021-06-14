from rest_framework import serializers

from .models import CustomUser

class CustomUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'is_admin', 'is_active')

class CustomUserPSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'password', 'is_admin', 'is_active')

class CustomUserLoginSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')


class UserSerialize():
    def change(self, data):
        payload = {
            'id'            : data.id,
            'username'      : data.username,
            'email'         : data.email,
            'is_active'     : data.is_active,
            'is_admin'      : data.is_admin,
            'is_superuser'  : data.is_superuser
        }
        return payload

class DeviceSerialize():
    def getDeviceData(self, press, temp, time):
        payload = {
            'Pressure'      : press,
            'Temperature'   : temp
        }
        return payload