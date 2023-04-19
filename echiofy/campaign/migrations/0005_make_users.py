# Generated by Django 3.2 on 2023-04-18 17:50

from django.contrib.auth import get_user_model
from django.db import migrations
import re

def create_user(username, is_influencer):
    User = get_user_model()
    match = re.match(r'^([a-zA-Z]+)(\d+)$', username)
    if match:
        first_name = match.group(1)
        last_name = match.group(2)
    else:
        first_name = username
        last_name = ''
    User.objects.create_user(username=username, password=username, first_name=first_name, last_name=last_name)

def make_users(apps, schema_editor):
    User = get_user_model()
    Influencer = apps.get_model('campaign', 'Influencer')



class Migration(migrations.Migration):

    dependencies = [
        ('campaign', '0004_campaign_influencers'),
        ('user', '0003_remove_userprofile_is_influencer')
    ]

    operations = [
    ]
