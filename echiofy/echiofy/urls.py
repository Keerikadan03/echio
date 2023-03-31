"""echiofy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from web import views as web_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', web_views.homepage, name='homepage'),
    path('find_influencers/', web_views.find_influencers, name='find_influencers'),
    path('create_campaign/', web_views.create_campaign, name='create_campaign'),

    # path('add-campaign/', web_views.add_campaign, name='add_campaign'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
