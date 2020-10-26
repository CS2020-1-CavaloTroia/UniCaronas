from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Rotas para administração
    path('frame/admin/', admin.site.urls),
    # Rotas da aplicação WEB
    path('api/', include('server.urls')),
    # Rotas para a API
    url('', include('server.paths')),
]
