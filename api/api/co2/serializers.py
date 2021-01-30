from rest_framework import serializers
from .models import Emission

class EmissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Emission
        #fields = '__all__'
        fields = ['name', 'user_type', 'time', 'longitude', 'lattitude', 'heat_type', 'heat', 'vehicle_type', 'electricity', 'vehicle', 'air', 'rail', 'emissions_total']


    