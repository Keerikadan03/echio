from django.db import models
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import UserProfile


# Create your models here.
class UserRegisterForm(UserCreationForm):
    class Meta:
        model = UserProfile
        fields = ['username', 'email', 'password1', 'password2', 'first_name', 'last_name', 'is_influencer']

class UserLoginForm(AuthenticationForm):
    def confirm_login_allowed(self, user):
        pass
