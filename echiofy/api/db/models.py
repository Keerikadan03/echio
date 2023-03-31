from pydantic import BaseModel
from enum import Enum

# Brainstorming different mongo models

# User (username, password, fullname, is_influencer) - login related stuff
# Influencer (username, instagram_id, youtube_id) - influencer related stuff
# Client (username, company_name, company_website) - client related stuff
# Campaign (client_username, campaign_name, image_url, platform_enum, primary_objective_enum, brand, payment_enum, budget, payment_delay_days, tentative_campaign_payout)
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
    platform_enum: PlatformEnum
    primary_objective_enum: PrimaryObjectiveEnum
    brand: str
    payment_enum: PaymentEnum
    budget: int
    payment_delay_days: int
    tentative_campaign_payout: int

class CampaignInfluencer(BaseModel):
    campaign_id: str
    influencers: list[str]

