from django.shortcuts import render

# Create your views here.
TEMPLATE_HOMEPAGE = "homepage.html"
TEMPLATE_LOGIN = "login.html"
TEMPLATE_REGISTER = "register.html"
TEMPLATE_CREATE_CAMPAIGN = "create_campaign.html"
TEMPLATE_CAMPAIGNS = "campaigns.html"
TEMPLATE_FIND_INFLUENCERS = "find_influencers.html"


def homepage(request):
    context = {}
    return render(request, TEMPLATE_HOMEPAGE, context)

def login(request):
    context = {}
    return render(request, TEMPLATE_LOGIN, context)

def signup(request):
    context = {}
    return render(request, TEMPLATE_REGISTER, context)

def create_campaign(request):
    context = {}
    return render(request, TEMPLATE_CREATE_CAMPAIGN, context)

def campaigns(request):
    context = {}
    return render(request, TEMPLATE_CAMPAIGNS, context)

def find_influencers(request):
    context = {}
    return render(request, TEMPLATE_FIND_INFLUENCERS, context)

