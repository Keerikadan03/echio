from django.urls import path
from .views import *

urlpatterns = [

    path('campaigns/', campaigns, name='campaigns'),
    path('campaigns/create', campaign_create, name='campaign-create'),
    path('campaigns/<int:id>', campaign_landing, name='campaign-landing'),
    path('campaigns/<int:id>/overview', campaign_overview, name='campaign-overview'),
    path('campaigns/<int:id>/details', campaign_details_view, name='campaign-details-view'),
    path('campaigns/<int:id>/details/edit', campaign_details_edit, name='campaign-details-edit'),
    path('campaigns/<int:id>/influencers', campaign_influencers_view, name='campaign-influencers-view'),
    path('campaigns/<int:id>/influencers/explore', campaign_influencers_explore, name='campaign-influencers-explore'),
    # path('find_influencers/', find_influencers, name='find_influencers'),
    # path('campaigns/<int:id>/view-influencers', campaign_view_influencers, name='campaign-view-influencers'),

    path('influencer/<int:id>', influencer_landing, name='influencer-landing'),

]
