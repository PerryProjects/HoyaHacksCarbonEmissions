from django.db import models


class Emission (models.Model):

    # Heat type constants
    NATURALGAS = 'NGS'
    OIL = 'OIL'
    OTHER = 'OTH'
    HEAT_CHOICES = [
        (NATURALGAS, 'NaturalGas'),
        (OIL, 'Oil'),
        (OTHER, 'Other'),
    ]

    # Type of user
    RESIDENTIAL = 'R'
    COMMERCIAL = 'C'
    USER_TYPE_CHOICES = [
        (RESIDENTIAL, 'Residential'),
        (COMMERCIAL, 'Commercial'),
    ]

    # Vehicle type constants
    DIESEL = 'D'
    GASOLINE = 'G'
    VEHICLE_CHOICES = [
        (DIESEL, 'Diesel'),
        (GASOLINE, 'Gas')
    ]

    user_type = models.CharField(
        max_length=1,
        choices=USER_TYPE_CHOICES,
    )

    heat_type = models.CharField(
        max_length=3,
        choices=HEAT_CHOICES,
        default=OTHER,
    )

    vehicle_type = models.CharField(
        max_length=1,
        choices=VEHICLE_CHOICES,
        default=GASOLINE,
    )

    name = models.CharField(max_length=100)
    time = models.IntegerField()
    longitude = models.FloatField()
    lattitude = models.FloatField()
    heat = models.FloatField()
    vehicle = models.FloatField()
    electricity = models.FloatField()
    air = models.FloatField()
    rail = models.FloatField()

    # Model methods
    @property
    def emissions_total(self):
        
        # Init data
        total_heat = 0
        total_vehicle = 0

        # Calculate Heat
        if self.heat_type in {self.NATURALGAS}:
            toal_heat = (self.heat / 100) * .531

        if self.heat_type in {self.OIL}:
            toal_heat = (self.heat / 100) * 1.016

        if self.heat_type in {self.OTHER}:
            toal_heat = (self.heat / 100) * .576

        # Calculate Vehicle Consumption
        if self.vehicle_type in {self.DIESEL}:
            toal_vehicle = (self.vehicle / 100000) * 40.84

        if self.vehicle_type in {self.GASOLINE}:
            toal_vehicle = (self.vehicle / 100000) * 3.512

        total_electricity = (self.electricity/100) * .043

        total_air = (self.air/10) * .002

        total_rail = (self.rail/1000) * .114

        return total_heat + total_vehicle + + total_electricity + total_air + total_rail