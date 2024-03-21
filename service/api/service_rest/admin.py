from django.contrib import admin
from .models import Appointment, Technician

# Register your models here.
admin.site.register(Appointment)
admin.site.register(Technician)