import asyncio
from asgiref.sync import async_to_sync
from channels.consumer import AsyncConsumer
from channels.layers import get_channel_layer
import json

class ChatConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        print("connected", event)
        await self.send({
            "type": "websocket.accept"
        })
        obj = {'name' : "vani"}
        await (self.channel_layer.group_add)("chat", self.channel_name)
        #await ChatConsumer.classObj.renderData("Datatobesent")
        #self.sendData("data")
    
        #while True:
        await asyncio.sleep(2)

        obj = {'name' : "vani"}
            
        await self.send({
            'type': 'websocket.send',
            'text': json.dumps(obj)
        })

    def sendData(self,data):
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
                        'chat',
                        {'type': 'send_message', 'data': data})

    async def send_message(self, event):
        print("sending message")
        await self.send({
            'type': 'websocket.send',
            'text': json.dumps({'List' : event['data']})})

    async def websocket_receive(self, event):
        print("receive", event)

    async def websocket_disconnect(self, event):
        print("disconnected", event)
        async_to_sync(self.channel_layer.group_discard)("chat", self.channel_name)