# Download the Python helper library from twilio.com/docs/python/install
from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "AC205199e894f16e6da1cf14437def2b34"
auth_token = "3a4e7b8b188ef4285cc13db9cb2ae6ab"
client = Client(account_sid, auth_token)

call = client.calls.create(to="+14082024554",
                           from_="+16692227955",
                           url="http://sleepybot-2a22d.firebaseapp.com/democall1.xml")

print(call.sid)
