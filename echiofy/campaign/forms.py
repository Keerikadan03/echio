from django import forms
from .models import *


class CampaignCreationForm(forms.Form):

    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Campaign Name'}), required=True)
    description = forms.CharField(widget=forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Campaign Description'}), required=True)
    primary_objective = forms.CharField(widget=forms.Select(choices=[(tag, tag.value) for tag in PrimaryObjectiveEnum], attrs={'class': 'form-select'}), required=True)
    brand = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Brand'}), required=True)
    payment_type = forms.CharField(widget=forms.Select(choices=[(tag, tag.value) for tag in PaymentTypeEnum], attrs={'class': 'form-select'}), required=True)
    budget = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    payment_delay_days = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    tentative_payout = forms.IntegerField(widget=forms.TextInput(attrs={'class': 'form-control'}))

