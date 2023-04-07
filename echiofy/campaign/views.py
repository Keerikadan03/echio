from django.shortcuts import render

# Create your views here.
TEMPLATE_CREATE_CAMPAIGN = "campaign/create_campaign.html"
TEMPLATE_CAMPAIGNS = "campaign/campaigns.html"
TEMPLATE_FIND_INFLUENCERS = "campaign/find_influencers.html"


def create_campaign(request):
    context = {}
    return render(request, TEMPLATE_CREATE_CAMPAIGN, context)

def campaigns(request):
    context = {}
    return render(request, TEMPLATE_CAMPAIGNS, context)

def find_influencers(request):
    context = {}
    return render(request, TEMPLATE_FIND_INFLUENCERS, context)

