# Generated by Django 3.2 on 2023-04-25 05:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_make_admin'),
    ]

    operations = [
        migrations.AddField(
            model_name='influencer',
            name='instagram_id',
            field=models.CharField(blank=True, default=None, max_length=32, unique=True),
        ),
        migrations.AddField(
            model_name='influencer',
            name='tiktok_id',
            field=models.CharField(blank=True, default=None, max_length=32, unique=True),
        ),
        migrations.AddField(
            model_name='influencer',
            name='youtube_id',
            field=models.CharField(blank=True, default=None, max_length=32, unique=True),
        ),
    ]
