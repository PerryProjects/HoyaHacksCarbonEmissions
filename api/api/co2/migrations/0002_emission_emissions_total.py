# Generated by Django 3.1.5 on 2021-01-31 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('co2', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='emission',
            name='emissions_total',
            field=models.FloatField(null=True),
        ),
    ]