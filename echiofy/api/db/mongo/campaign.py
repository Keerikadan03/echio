from . import pymongo_campaign
from models import Campaign


def getCampaign(campaign_name: str) -> Campaign | None:
    return pymongo_campaign.find_one({"campaign_name": campaign_name})

def checkCampaign(campaign_name: str) -> bool:
    return getCampaign(campaign_name) is not None

def addCampaign(campaign: Campaign):
    pymongo_campaign.insert_one(campaign.dict())


