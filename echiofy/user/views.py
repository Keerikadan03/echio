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


def user_login(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return redirect('user-logout')
    else:
        form = UserLoginForm()
    return render(request, 'user/login.html', {'form': form})


from django.contrib.auth.views import LogoutView
def user_logout(request):
    return LogoutView.as_view(
            next_page='user-logout',
            template_name='user/logout.html',
            ) (request)
