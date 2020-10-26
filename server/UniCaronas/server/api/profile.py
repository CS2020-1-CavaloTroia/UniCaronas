from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from server.models import Vehicle, Local, Schedule, Ride, Trip
from server.serializers import VehicleSerializer, UserSerializer, LocalSerializer, ScheduleSerializer, RideSerializer, TripSerializer


@permission_classes([IsAuthenticated])
class ApiProfile(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@permission_classes([IsAuthenticated])
class ApiTrip(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer


@permission_classes([IsAuthenticated])
class ApiVehicle(generics.ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer


@permission_classes([IsAuthenticated])
class ApiLocal(generics.ListCreateAPIView):
    queryset = Local.objects.all()
    serializer_class = LocalSerializer


@permission_classes([IsAuthenticated])
class ApiSchedule(generics.ListCreateAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer


@permission_classes([IsAuthenticated])
class ApiRide(generics.ListCreateAPIView):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer
