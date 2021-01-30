from django.shortcuts import render
from rest_framework import viewsets
from .models import Emission
from .serializers import EmissionSerializer
from rest_framework.response import Response


class EmissionsViewSet(viewsets.ModelViewSet):
    queryset = Emission.objects.all()
    serializer_class = EmissionSerializer

    def create(self, request, format=None):
        serializer = EmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            results = {'emissions_total':serializer.data['emissions_total']}
            return Response(results)
        return Response({'emissions_total':serializer.data['emissions_total']})