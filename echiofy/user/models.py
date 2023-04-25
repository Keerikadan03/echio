from django.contrib.auth.models import AbstractUser
from django.db import models


class UserProfile(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=32, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    # is_influencer = models.BooleanField(default=False) #type: ignore
    influencer = models.OneToOneField('Influencer', on_delete=models.CASCADE, blank=True, null=True, default=None)


class Influencer(models.Model):
    id = models.AutoField(primary_key=True)
    avg_views = models.IntegerField(blank=True)
    avg_likes = models.IntegerField(blank=True)
    avg_comments = models.IntegerField(blank=True)
    followers = models.IntegerField(blank=True)
    instagram_id = models.CharField(max_length=32, unique=True, blank=True, default=None)
    youtube_id = models.CharField(max_length=32, unique=True, blank=True, default=None)
    tiktok_id = models.CharField(max_length=32, unique=True, blank=True, default=None)

