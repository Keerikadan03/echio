from .forms import UserRegisterForm, UserLoginForm
from django.contrib import messages
from django.shortcuts import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import UserProfile
from django.views.decorators.http import require_http_methods
from django.shortcuts import render, redirect

# Create your views here.

def user_register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Account created successfully')
            return redirect('user-login')
    else:
        form = UserRegisterForm()
    return render(request, 'user/register.html', {'form': form})


from django.contrib.auth.views import LogoutView, LoginView
def user_login(request):
    return LoginView.as_view(
            template_name='user/login.html',
            authentication_form=UserLoginForm,
            next_page='homepage',
            ) (request)


def user_logout(request):
    return LogoutView.as_view(
            next_page='user-logout',
            template_name='user/logout.html',
            ) (request)
