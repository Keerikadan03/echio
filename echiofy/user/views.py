from django.shortcuts import render
from .forms import UserRegisterForm, UserLoginForm
from django.contrib import messages
from django.shortcuts import redirect

# Create your views here.

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, f'Your account has been created! You are now able to log in')
            return redirect(request, 'login')
    else:
        form = UserRegisterForm()
    context = {'form': form}
    return render(request, 'register.html', context)


def login(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            messages.success(request, f'You are now able to log in')
            return redirect(request, 'login')


    context = {}
    return render(request, 'login.html', context)
