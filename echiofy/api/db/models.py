# I'm using pydantic because i have to work with mongoDB

from pydantic import BaseModel
from enum import Enum

# Brainstorming different mongo models

# User (username, password, fullname, is_influencer) - login related stuff
# Influencer (username, instagram_id, youtube_id) - influencer related stuff
# Client (username, company_name, company_website) - client related stuff
# Campaign (client_username, campaign_name, image_url, platform, primary_objective, brand, payment_type, budget, payment_delay_days, tentative_payout)
# CampaignInfluencer (campaign_id, influencer_username) - campaign influencer related stuff


class User(BaseModel):
    username: str
    password: str
    fullname: str
    is_influencer: bool

class Influencer(BaseModel):
    username: str
    instagram_id: str | None
    youtube_id: str | None

class Client(BaseModel):
    username: str
    company_name: str
    company_website: str | None

class Campaign(BaseModel):

    class PlatformEnum(str, Enum):
        INSTAGRAM = "instagram"
        YOUTUBE = "youtube"
        BOTH = "both"
        NONE = "none"

    class PrimaryObjectiveEnum(str, Enum):
        REACH = "reach"
        ENGAGEMENT = "engagement"
        CONTENT_CREATION = "content_creation"

    class PaymentEnum(str, Enum):
        PAID = "paid"
        BARTER = "barter"

    client_username: str
    campaign_name: str
    image_url: str
    platform: PlatformEnum
    primary_objective: PrimaryObjectiveEnum
    brand: str
    payment_type: PaymentEnum
    budget: int
    payment_delay_days: int
    tentative_payout: int

def campaign_from_dict(dict: dict) -> Campaign | None:
    print(dict)

    client_username = dict["client_username"]

    campaign_name = dict["campaign_name"]

    if "image_url" in dict:
        image_url = dict["image_url"]
    else:
        image_url = ""

    platform = Campaign.PlatformEnum.NONE
    if "platform_youtube" in dict and "platform_instagram" in dict:
        platform = Campaign.PlatformEnum.BOTH
    elif "platform_youtube" in dict:
        platform = Campaign.PlatformEnum.YOUTUBE
    elif "platform_instagram" in dict:
        platform = Campaign.PlatformEnum.INSTAGRAM

    primary_objective = Campaign.PrimaryObjectiveEnum(dict["primary_objective"])
    brand = dict["brand"]
    payment_type = Campaign.PaymentEnum(dict["payment_type"])
    budget = dict["budget"]
    payment_delay_days = dict["payment_delay_days"]
    tentative_payout = dict["tentative_payout"]

    return Campaign(
        client_username=client_username,
        campaign_name=campaign_name,
        image_url=image_url,
        platform=platform,
        primary_objective=primary_objective,
        brand=brand,
        payment_type=payment_type,
        budget=budget,
        payment_delay_days=payment_delay_days,
        tentative_payout=tentative_payout,
    )



class CampaignInfluencer(BaseModel):
    campaign_id: str
    influencers: list[str]

