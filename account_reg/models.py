from django.db import models

# Create your models here.

class User(models.Model):
    uname = models.CharField(max_length=50, primary_key=True)
    email = models.EmailField()
    pwd = models.CharField(max_length=50)



