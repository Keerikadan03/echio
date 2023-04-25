from itertools import chain
from django.db import models
from enum import Enum

class PrimaryObjectiveEnum(str, Enum):
    CONTENT_CREATION = 'Content Creation'
    REACH = 'Reach'
    ENGAGEMENT = 'Engagement'

    def __str__(self):
        return self.value


class PaymentTypeEnum(str, Enum):
    PAID = 'Paid'
    BARTER = 'Barter'
    def __str__(self):
        return self.value


class CampaignAdditionalManagers(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    manager = models.ForeignKey('BrandMember', on_delete=models.CASCADE)

    objects = models.Manager()

class CampaignInfluencers(models.Model):
    campaign = models.ForeignKey('Campaign', on_delete=models.CASCADE)
    user = models.ForeignKey('user.UserProfile', on_delete=models.CASCADE)

    objects = models.Manager()

class Campaign(models.Model):
    brand = models.ForeignKey('Brand', on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    primary_objective = models.CharField(max_length=50, choices=[(tag.value, tag.value) for tag in PrimaryObjectiveEnum])
    payment_type = models.CharField(max_length=50, choices=[(tag.value, tag.value) for tag in PaymentTypeEnum])
    budget = models.IntegerField()
    payment_delay_days = models.IntegerField()
    tentative_payout = models.IntegerField()

    @property
    def managers(self):
        return chain(self.brand.managers, CampaignAdditionalManagers.objects.filter(campaign=self)) #type: ignore

    @property
    def influencers(self):
        return CampaignInfluencers.objects.filter(campaign=self)

    objects = models.Manager()

class BrandMember(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey('user.UserProfile', on_delete=models.CASCADE)
    brand = models.ForeignKey('Brand', on_delete=models.CASCADE)
    is_manager = models.BooleanField(default=False) #type: ignore

    @property
    def campaigns(self):
        if self.is_manager:
            return self.brand.campaigns #type: ignore
        return chain(self.brand.campaigns, CampaignAdditionalManagers.objects.filter(manager=self)) #type: ignore

    objects = models.Manager()

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField()

    @property
    def members(self):
        return BrandMember.objects.filter(brand=self)

    @property
    def managers(self):
        return BrandMember.objects.filter(brand=self, is_manager=True)

    @property
    def campaigns(self):
        return Campaign.objects.filter(brand=self)

    objects = models.Manager()



