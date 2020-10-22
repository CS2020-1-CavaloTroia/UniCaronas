from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

from server.models import Vehicle, Local, Schedule, Ride, Trip
from server.serializers import VehicleSerializer, UserSerializer, LocalSerializer, ScheduleSerializer, RideSerializer, TripSerializer, TokenSerializer


@permission_classes([IsAuthenticated])
class Token(generics.ListCreateAPIView):
    queryset = Token.objects.all()
    serializer_class = TokenSerializer


@permission_classes([IsAuthenticated])
class Profile(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@permission_classes([IsAuthenticated])
class Trip(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer


@permission_classes([IsAuthenticated])
class Vehicle(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


@permission_classes([IsAuthenticated])
class Local(generics.ListCreateAPIView):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer


@permission_classes([IsAuthenticated])
class Schedule(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer


@permission_classes([IsAuthenticated])
class Ride(generics.ListCreateAPIView):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer
