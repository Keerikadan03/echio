from django.db import models
from enum import Enum
from user.models import UserProfile

class PrimaryObjectiveEnum(str, Enum):
    CONTENT_CREATION = 'Content Creation'
    REACH = 'Reach'
    ENGAGEMENT = 'Engagement'


class PaymentTypeEnum(str, Enum):
    PAID = 'Paid'
    BARTER = 'Barter'



class Campaign(models.Model):
    id = models.AutoField(primary_key=True)
    owner_user = models.ForeignKey('user.UserProfile', on_delete=models.CASCADE, blank=False)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    primary_objective = models.CharField(max_length=50, choices=[(tag, tag.value) for tag in PrimaryObjectiveEnum])
    brand = models.CharField(max_length=100)
    payment_type = models.CharField(max_length=50, choices=[(tag, tag.value) for tag in PaymentTypeEnum])
    budget = models.IntegerField()
    payment_delay_days = models.IntegerField()
    tentative_payout = models.IntegerField()

    def __str__(self):
        return self.name


class Influencer(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, blank=False)
    avg_views = models.IntegerField(blank=True)
    avg_likes = models.IntegerField(blank=True)
    avg_comments = models.IntegerField(blank=True)
    followers = models.IntegerField(blank=True)


