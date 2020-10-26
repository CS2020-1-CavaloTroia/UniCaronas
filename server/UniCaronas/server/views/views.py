from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def welcome(request):
    return render(request, 'welcome.html')


@login_required(login_url="/login/")
def home(request):
    return render(request, 'home.html')


@login_required(login_url="/login/")
def api(request):
    return render(request, 'api.html')
