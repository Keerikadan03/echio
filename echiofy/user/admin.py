from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *

admin.site.register(UserProfile, UserAdmin)
admin.site.register(Influencer)
