from django import forms
from .models import TestModel


class TestCreationForm(forms.ModelForm):
    class Meta:
        model = TestModel
        fields = ['name', 'field1']
