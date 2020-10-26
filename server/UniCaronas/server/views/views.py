from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url="/login/")
def home(request):
    return render(request, 'home.html')


@login_required(login_url="/login/")
def api(request):
    return render(request, 'api.html')


@login_required(login_url="/login/")
def admin(request):
    return render(request, 'admin.html')


@login_required(login_url="/login/")
def openapi(request):
    return render(request, 'openapi.html')
