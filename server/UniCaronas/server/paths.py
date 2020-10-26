from django.urls import path
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.views import get_swagger_view

from .views import auth, views

schema_view = get_swagger_view(title='API Swagger')

app_name = "web"
urlpatterns = [
    # Rotas para autenticação
    path('login/', auth.login, name="login"),
    path('logout/', auth.logout, name="logout"),
    # Rotas em que apenas os usuários autenticados possuem acesso
    path('', views.home, name="home"),
    # Rotas para administração
    path('dev/api/', views.api, name="api"),
    path('dev/admin/', views.admin, name="admin"),
    path('dev/openapi/', views.openapi, name="openapi"),
    path('dev/swagger/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger'),
    # Rotas para iframes
    path('iframe/openapi/', get_schema_view(
        title="UniCaronas",
        description="API para testes de desenvolvimento da aplicação do UniCaronas"
    ), name='iframe-openapi'),
]
