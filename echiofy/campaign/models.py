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



class Campaign(models.Model):
    owner_user = models.ForeignKey('user.UserProfile', on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    primary_objective = models.CharField(max_length=50, choices=[(tag.value, tag.value) for tag in PrimaryObjectiveEnum])
    payment_type = models.CharField(max_length=50, choices=[(tag.value, tag.value) for tag in PaymentTypeEnum])
    budget = models.IntegerField()
    payment_delay_days = models.IntegerField()
    tentative_payout = models.IntegerField()
    influencers = models.ManyToManyField('user.Influencer', blank=True, default=None)

    objects = models.Manager()


