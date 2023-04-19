from django.urls import path

from .views import *

urlpatterns = [

    path('register/', user_register, name='user-register'),
    path('login/', user_login, name='user-login'),
    path('logout/', user_logout, name='user-logout'),

    path('account/overview/', user_account_overview_view, name='account-overview-view'),
    path('account/influencer/', user_account_influencer_view, name='account-influencer-view'),

]
