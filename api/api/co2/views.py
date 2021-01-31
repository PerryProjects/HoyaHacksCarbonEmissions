from django.shortcuts import render
from rest_framework import viewsets
from .models import Emission
from .serializers import EmissionSerializer
from rest_framework.response import Response
from django.db.models import Sum


class EmissionsViewSet(viewsets.ModelViewSet):
    queryset = Emission.objects.all()
    serializer_class = EmissionSerializer

    def list(self, request, *args, **kwargs):
        data = EmissionSerializer(self.get_queryset(),many=True).data
        total_emissions = Emission.objects.aggregate(Sum('emissions_total'))['emissions_total__sum']
        print('\n\n', total_emissions, '\n\n')
        for em_entry in data:
            em_entry['normalized_emissions'] = em_entry['emissions_total'] / total_emissions
        custom_data = {
            'total_all_emissions': total_emissions,
            'list_emission_entries': data,
        }
        return Response(custom_data)