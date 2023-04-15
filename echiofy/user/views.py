from .forms import UserRegisterForm, UserLoginForm
from django.contrib import messages
from django.shortcuts import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .models import UserProfile
from django.views.decorators.http import require_http_methods

# Create your views here.

@require_http_methods(['POST'])
def user_register(request):
    user = UserProfile(
        username=request.POST['username'],
        email=request.POST['email'],
        first_name=request.POST['first_name'],
        last_name=request.POST['last_name'],
        is_influencer=request.POST['is_influencer'],
            )
    user.full_clean()
    user.save()
    return HttpResponse(b"User created", status_code=201)


@require_http_methods(['GET'])
def user_login(request):
    username = request.GET['username']
    password = request.GET['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        return HttpResponse(b"User authenticated", status_code=200)
    else:
        return HttpResponse(b"User not authenticated", status_code=401)



from django.contrib.auth.views import LogoutView
def user_logout(request):
    return LogoutView.as_view(
            next_page='user-logout',
            template_name='user/logout.html',
            ) (request)
