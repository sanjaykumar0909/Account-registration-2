from django.shortcuts import render
from .models import User

# Create your views here.
def home(request):
    return render(request, "home.html")

def login_page(req):
    return render(req, "index.html")

def result(request):
    form={
        "uname": request.POST["username"],
        "email": request.POST["email"],
        "password": request.POST["password"],
    }
    user1 = User(uname= form.get("uname"), email= form.get("email"), pwd= form.get("password"))
    user1.save()
    return render(request, "result.html", {'result': form})
