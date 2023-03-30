from django.shortcuts import render

# Create your views here.
TEMPLATE_HOMEPAGE = "homepage.html"
TEMPLATE_FIND_INFLUENCERS = "find_influencers.html"


def homepage(request):
    context = {}
    return render(request, TEMPLATE_HOMEPAGE, context)

def find_influencers(request):
    context = {}
    return render(request, TEMPLATE_FIND_INFLUENCERS, context)
