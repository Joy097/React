from django.urls import path, include
from . import views
urlpatterns = [
    path('register/',views.Register.as_view()),
    path('login/',views.Login.as_view()),
    path('user/',views.UserView.as_view()),
    path('logout/',views.Logout.as_view())
]