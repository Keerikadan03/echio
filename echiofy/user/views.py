from django.shortcuts import render
from .forms import UserRegisterForm, UserLoginForm
from django.contrib import messages
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login, logout

# Create your views here.

def user_register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'Your account has been created! You are now able to log in')
            return redirect('user-login')
    else:
        form = UserRegisterForm()
    context = {'form': form}
    return render(request, 'register.html', context)


from django.contrib.auth.views import LoginView
def user_login(request):
    return LoginView.as_view(
            template_name='login.html',
            authentication_form=UserLoginForm,
            next_page='homepage',
            ) (request)

from django.contrib.auth.views import LogoutView
def user_logout(request):
    return LogoutView.as_view(
            next_page='user-logout',
            template_name='logout.html',
            ) (request)
