from .forms import UserRegisterForm, UserLoginForm
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model

# Create your views here.

def user_register(request):
    if request.user.is_authenticated:
        messages.info(request, 'You are already logged in')
        return redirect('homepage')

    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Account created successfully')
            return redirect('user-login')
    else:
        form = UserRegisterForm()
    return render(request, 'user/register.html', {'form': form})


from django.contrib.auth.views import LogoutView
def user_login(request):
    if request.user.is_authenticated:
        messages.info(request, 'You are already logged in')
        return redirect('homepage')

    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            User = get_user_model()
            if not User.objects.filter(username=username).first():
                messages.error(request, 'User does not exist')
            else:
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    messages.success(request, 'Login successful')
                    return redirect('homepage')
                else:
                    messages.error(request, 'Invalid username or password')
        else:
            messages.error(request, 'Invalid username or password')
    else:
        form = UserLoginForm()
    return render(request, 'user/login.html', {'form': form})


def user_logout(request):
    return LogoutView.as_view(
            next_page='homepage',
            template_name='user/logout.html',
            ) (request)
