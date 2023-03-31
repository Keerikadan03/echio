

# two approaches to this problem
# use django's form
# handle it yourself

from django import forms

class CreateCampaignForm(forms.Form):
    campaign_name = forms.CharField(max_length=100)
    description = forms.CharField(widget=forms.Textarea)
    start_date = forms.DateField()
    end_date = forms.DateField()

