from django.shortcuts import redirect, render
from .models import Campaign
from django.contrib import messages

# Create your views here.
TEMPLATE_CREATE_CAMPAIGN = "campaign/create_campaign.html"
TEMPLATE_CAMPAIGNS = "campaign/campaigns.html"
TEMPLATE_CAMPAIGN_DETAILS = "campaign/campaign_details.html"
TEMPLATE_CAMPAIGN_NOT_FOUND = "campaign/campaign_not_found.html"
TEMPLATE_FIND_INFLUENCERS = "campaign/find_influencers.html"


def create_campaign(request):
    if not request.user.is_authenticated:
        messages.error(request, f'You must be logged in to create a campaign')
        return redirect('user-login')

    if request.method == "POST":
        post = request.POST.dict()
        owner_user = request.user
        name = post["name"]
        description = post["description"]
        primary_objective = post["primary_objective"]
        brand = post["brand"]
        payment_type = post["payment_type"]
        budget = post["budget"]
        payment_delay_days = post["payment_delay_days"]
        tentative_payout = post["tentative_payout"]

        campaign = Campaign(
            owner_user=owner_user,
            name=name,
            description=description,
            primary_objective=primary_objective,
            brand=brand,
            payment_type=payment_type,
            budget=budget,
            payment_delay_days=payment_delay_days,
            tentative_payout=tentative_payout,
            )

        campaign.save()

        messages.success(request, f'Your campaign has been created!')

        return redirect(f'/campaign/{campaign.id}')

    context = {}
    return render(request, TEMPLATE_CREATE_CAMPAIGN, context)

def campaigns(request, id=None):

    if not request.user.is_authenticated:
        return redirect('user-login')

    if id is None:
        campaigns = Campaign.objects.all().filter(owner_user=request.user)
        context = {'campaigns': campaigns}
        return render(request, TEMPLATE_CAMPAIGNS, context)

    campaign = Campaign.objects.get(id=id, owner_user=request.user)
    if campaign is None:
        context = {}
        return render(request, TEMPLATE_CAMPAIGN_NOT_FOUND, context)

    context = {'campaign': campaign}
    return render(request, TEMPLATE_CAMPAIGN_DETAILS, context)

def find_influencers(request):
    context = {}
    return render(request, TEMPLATE_FIND_INFLUENCERS, context)

def test_form(request):
    context = {}
    return render(request, 'campaigns/test.html', context)
