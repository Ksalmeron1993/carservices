from django.contrib import admin
from .models import AutoVO, Appointment, Technician

# Register your models here.
admin.site.register(AutoVO)
admin.site.register(Appointment)
admin.site.register(Technician)