from django.db import models


class Co2 (models.Model):
    co2_amount = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)