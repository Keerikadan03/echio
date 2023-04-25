from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.fields.related_descriptors import QuerySet
from campaign.models import BrandMember, Brand, Campaign


class UserProfile(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=32, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    # is_influencer = models.BooleanField(default=False) #type: ignore
    influencer = models.OneToOneField('Influencer', on_delete=models.CASCADE, blank=True, null=True, default=None)

    @property
    def brands(self):
        return BrandMember.objects.filter(user=self)

    @property
    def campaigns(self):
        set = QuerySet(model=Campaign)
        for brand in self.brands:
            set = set | brand.campaigns
        return set


class Influencer(models.Model):
    id = models.AutoField(primary_key=True)
    avg_views = models.IntegerField(default=0)
    avg_likes = models.IntegerField(default=0)
    avg_comments = models.IntegerField(default=0)
    followers = models.IntegerField(default=0)
    instagram_id = models.CharField(max_length=32, unique=True, blank=True, default=None, null=True)
    youtube_id = models.CharField(max_length=32, unique=True, blank=True, default=None, null=True)
    tiktok_id = models.CharField(max_length=32, unique=True, blank=True, default=None, null=True)

    objects = models.Manager()

    @property
    def user(self):
        return UserProfile.objects.get(influencer=self)

