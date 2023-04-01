from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

from .db.mongo import *
from .db.models import *


def create_campaign(request):
    if request.method == "POST":
        campaign = campaign_from_dict(request.POST.dict())
        if campaign is None:
            return HttpResponse("error")
        pymongo_campaigns.insert_one(campaign.dict())
        return HttpResponse("success")

    return HttpResponse("what")


