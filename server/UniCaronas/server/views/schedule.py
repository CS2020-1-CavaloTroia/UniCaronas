from datetime import date

from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from server.models import Schedule, Trip


@login_required(login_url="/login/")
def schedule(request):
    schedule = Schedule.objects.get(user=request.user)
    trips = Trip.objects.filter(schedule=schedule).order_by('hour')
    week = {}

    for day in Trip.week_days:
        week[day[0]] = {
            'name': day[1],
            'trips': [],
        }

    for trip in trips:
        week[trip.day]['trips'].append(trip)

    return render(request, 'schedule/schedule.html', {
        'week': week,
        'today': date.today()
    })
