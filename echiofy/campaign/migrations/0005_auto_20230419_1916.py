# Generated by Django 3.2 on 2023-04-19 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_auto_20230419_1916'),
        ('campaign', '0004_campaign_influencers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='influencers',
            field=models.ManyToManyField(blank=True, to='user.Influencer'),
        ),
        migrations.DeleteModel(
            name='Influencer',
        ),
    ]