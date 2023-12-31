# Generated by Django 3.2 on 2023-04-26 08:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('campaign', '0006_relations_changes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='brandmember',
            name='brand',
        ),
        migrations.RemoveField(
            model_name='brandmember',
            name='user',
        ),
        migrations.RemoveField(
            model_name='campaignadditionalmanagers',
            name='campaign',
        ),
        migrations.RemoveField(
            model_name='campaignadditionalmanagers',
            name='manager',
        ),
        migrations.RemoveField(
            model_name='campaign',
            name='brand',
        ),
        migrations.AddField(
            model_name='campaign',
            name='owner_user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='user.userprofile'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Brand',
        ),
        migrations.DeleteModel(
            name='BrandMember',
        ),
        migrations.DeleteModel(
            name='CampaignAdditionalManagers',
        ),
    ]
