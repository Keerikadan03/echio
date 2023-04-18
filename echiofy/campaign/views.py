from django.forms import model_to_dict
from django.shortcuts import redirect, render
from .models import Campaign
from django.contrib import messages
from .forms import *

# Create your views here.
TEMPLATE_CREATE_CAMPAIGN = "campaign/create_campaign.html"
TEMPLATE_CAMPAIGNS = "campaign/campaigns.html"
TEMPLATE_CAMPAIGN_DETAILS = "campaign/campaign_details.html"
TEMPLATE_CAMPAIGN_NOT_FOUND = "campaign/campaign_not_found.html"
TEMPLATE_FIND_INFLUENCERS = "campaign/find_influencers.html"
TEMPLATE_CAMPAIGN_OVERVIEW = "campaign/campaign-overview.html"
TEMPLATE_CAMPAIGN_VIEW_INFLUENCERS = "campaign/campaign-view-influencers.html"


def campaigns(request):

    if not request.user.is_authenticated:
        return redirect('user-login')

    campaigns = Campaign.objects.all().filter(owner_user=request.user)
    context = {'campaigns': campaigns}
    return render(request, TEMPLATE_CAMPAIGNS, context)

def campaign_overview(request, id : int):
    if not request.user.is_authenticated:
        return redirect('user-login')

    context = {}
    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, TEMPLATE_CAMPAIGN_NOT_FOUND, context)

    context = {'campaign': campaign}
    return render(request, TEMPLATE_CAMPAIGN_OVERVIEW, context)



def campaign_details(request, id : int):
    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        context = {}
        return render(request, 'campaign/campaign_not_found.html', context)

    context = {'campaign': campaign}
    return render(request, TEMPLATE_CAMPAIGN_DETAILS, context)

def find_influencers(request):
    context = {}
    return render(request, TEMPLATE_FIND_INFLUENCERS, context)


def create_campaign(request):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to create a campaign')
        return redirect('user-login')

    context = {}

    if request.method == "POST":
        form = CampaignCreationForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            owner_user = request.user
            if Campaign.objects.filter(owner_user=owner_user, name=name).exists():
                messages.error(request, f'A campaign with the name "{name}" already exists')
            else:
                form_data = form.cleaned_data
                try:
                    campaign = Campaign(
                        owner_user=owner_user,
                        name=name,
                        description=form_data['description'],
                        primary_objective=form_data['primary_objective'],
                        brand=form_data['brand'],
                        payment_type=form_data['payment_type'],
                        budget=form_data['budget'],
                        payment_delay_days=form_data['payment_delay_days'],
                        tentative_payout=form_data['tentative_payout'],
                            )
                except Exception as e:
                    messages.error(request, f'Form Error: {e}')
                else:
                    campaign.save()
                    messages.success(request, f'Your campaign has been created!')
                    return redirect('campaign-details', id=campaign.id)
        else:
            messages.error(request, 'There are errors with your form.')
    else:
        form = CampaignCreationForm()

    context['form'] = form
    return render(request, TEMPLATE_CREATE_CAMPAIGN, context)

def campaign_view_influencers(request, id : int):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to view influencers')
        return redirect('user-login')

    context = {}

    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, 'campaign/campaign_not_found.html', context)

    context['campaign'] = campaign
    return render(request, TEMPLATE_CAMPAIGN_VIEW_INFLUENCERS, context)
