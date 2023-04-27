from django.forms import model_to_dict
from django.shortcuts import redirect, render
from .models import Campaign
from user.models import Influencer, UserProfile
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

    campaigns = request.user.campaigns
    print(campaigns)
    context = {'campaigns': campaigns}
    return render(request, TEMPLATE_CAMPAIGNS, context)

def campaign_landing(request, id : int):

    context = {}
    campaign = Campaign.objects.filter(id=id).first()

    if campaign is None:
        return render(request, TEMPLATE_CAMPAIGN_NOT_FOUND, context)

    context = {'campaign': campaign}
    return render(request, 'campaign/landing.html', context)


def campaign_overview(request, id : int):
    if not request.user.is_authenticated:
        return redirect('user-login')

    context = {}
    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, TEMPLATE_CAMPAIGN_NOT_FOUND, context)

    if campaign not in request.user.campaigns:
        messages.error(request, f'You do not have access to this campaign')
        return render(request, 'not-allowed.html', context)

    context['campaign'] = campaign
    return render(request, TEMPLATE_CAMPAIGN_OVERVIEW, context)


def campaign_details_view(request, id : int):
    if not request.user.is_authenticated:
        return redirect('user-login')

    context = {}

    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, 'campaign/campaign_not_found.html', context)

    if campaign not in request.user.campaigns:
        messages.error(request, f'You do not have access to this campaign')
        return render(request, 'not-allowed.html', context)

    context['campaign'] = campaign
    return render(request, TEMPLATE_CAMPAIGN_DETAILS, context)

def campaign_details_edit(request, id : int):
    if not request.user.is_authenticated:
        return redirect('user-login')

    context = {}

    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, 'campaign/campaign_not_found.html', context)

    if campaign not in request.user.campaigns:
        messages.error(request, f'You do not have access to this campaign')
        return render(request, 'not-allowed.html', context)

    context['campaign'] = campaign
    return render(request, 'campaign/campaign-details-edit.html', context)


def campaign_create(request):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to create a campaign')
        return redirect('user-login')

    context = {}

    if request.method == "POST":
        form = CampaignCreationForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            if Campaign.objects.filter(name=name).exists():
                messages.error(request, f'A campaign with the name "{name}" already exists')
            else:
                form_data = form.cleaned_data
                owner_user = request.user
                try:
                    campaign = Campaign(
                        owner_user = owner_user,
                        name=name,
                        description=form_data['description'],
                        primary_objective=form_data['primary_objective'],
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
                    return redirect('campaign-details-view', id=campaign.id)
        else:
            messages.error(request, 'There are errors with your form.')
    else:
        form = CampaignCreationForm()

    context['form'] = form
    return render(request, TEMPLATE_CREATE_CAMPAIGN, context)

def campaign_influencers_view(request, id : int):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to view influencers')
        return redirect('user-login')

    context = {}

    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, 'campaign/campaign_not_found.html', context)

    context['campaign'] = campaign

    if campaign not in request.user.campaigns:
        messages.error(request, f'You do not have access to this campaign')
        return render(request, 'not-allowed.html', context)

    influencers = campaign.influencers
    context['influencers'] = influencers

    return render(request, TEMPLATE_CAMPAIGN_VIEW_INFLUENCERS, context)


def campaign_influencers_explore(request, id : int):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to view influencers')
        return redirect('user-login')

    context = {}

    campaign = Campaign.objects.filter(id=id).first()
    if campaign is None:
        return render(request, 'campaign/campaign_not_found.html', context)

    context['campaign'] = campaign

    if campaign not in request.user.campaigns:
        messages.error(request, f'You do not have access to this campaign')
        return render(request, 'not-allowed.html', context)

    # todo: params support

    influencers = Influencer.objects.all()

    context['influencers'] = influencers

    return render(request, 'campaign/campaign-influencer-explore.html', context)


def influencer_landing(request, id : int):

    context = {}
    influencer = Influencer.objects.filter(id=id).first()
    if influencer is None:
        messages.error(request, f'Influencer not found')
        return render(request, 'influencer/influencer_not_found.html', context)

    context['influencer'] = influencer
    return render(request, 'influencer/influencer-landing.html', context)

