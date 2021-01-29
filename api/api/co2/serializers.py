from rest_framework import serializers
from .models import Co2


class Co2Serializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Co2
        fields = ['co2_amount', 'user_id']