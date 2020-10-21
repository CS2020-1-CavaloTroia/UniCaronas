from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Vehicle, Local, Schedule, Trip, Ride, Passanger


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email')


class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'


class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'


class RideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ride
        fields = '__all__'


class PassangerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passanger
        fields = '__all__'
