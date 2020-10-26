from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from .api import api

app_name = "api"
urlpatterns = [
    path('get-token/', obtain_auth_token, name='get_token'),
    path('get/token/', api.Token.as_view(), name='token'),
    path('profile/', api.Profile.as_view(), name='profile'),
    path('profile/<int:pk>/', api.Profile.as_view(), name='profile'),
    path('vehicle/', api.Vehicle.as_view(), name='vehicle'),
    path('local/', api.Local.as_view(), name='local'),
    path('schedule/', api.Schedule.as_view(), name='schedule'),
    path('trip/', api.Trip.as_view(), name='trip'),
    path('ride/', api.Ride.as_view(), name='ride'),
]
