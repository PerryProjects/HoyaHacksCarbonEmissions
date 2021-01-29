from django.shortcuts import render
from rest_framework import viewsets
from .models import Co2
from .serializers import Co2Serializer


class CO2ViewSet(viewsets.ModelViewSet):
    queryset = Co2.objects.all()
    serializer_class = Co2Serializer