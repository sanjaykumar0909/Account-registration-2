from django.urls import path
from . import views

urlpatterns = [
    path("", views.home),
    path("login-page", views.login_page),
    path("target", views.result),
]
