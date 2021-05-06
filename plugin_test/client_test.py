'''
This is a plug-in test.

Should a new feature be required, test it here first.


Maintained by: Walter Frank Pintor
e-mail: walterpintor@syncware.ai

'''

from opcua import ua, Client
import time
from random import randint

ip_server = "127.0.0.1"
port = 4842

## Don't forget to utilize user to add/set values!!!
user = "admin"

url = "opc.tcp://"+user+"@"+ip_server+":"+str(port)
client = Client(url)

client.connect()
print("Client Connected")

uri = "http://opcfoundation.org/UA/"
idx = client.get_namespace_index(uri)


root_node = client.get_root_node()
obj = root_node.get_child(["0:Objects", "2:Syncware_Objects"])

print(obj)

x = 5
y = 3

# Register the robot/system using the syncware method - call it once
response_robot_attach_to_syncware = obj.call_method("2:syncware_attach", x, y)

# Robot Object after creation
rob_obj = root_node.get_child(["0:Objects", "2:Test_Object"])
print(rob_obj)
rob_obj_children = rob_obj.get_children()
print(rob_obj_children)


# We need to find a way to automatically determine the NodeID
# Now getting a variable node using its browse path
x_val = client.get_node("ns=2;i=7")
x_val.set_writable()
y_val = client.get_node("ns=2;i=8")
y_val.set_writable()


while True:
    #Temp = client.get_node("ns=2;i=2")
    #Temperature = Temp.get_value()
    #print(Temperature)
    x = randint(4,7)
    y = randint(3,9)

    time.sleep(1)

    x_val.set_value(ua.Variant([x], ua.VariantType.Int64))
    y_val.set_value(ua.Variant([y], ua.VariantType.Int64))
    
    
    #print("Syncware attachment result is: ", response_robot_attach_to_syncware)