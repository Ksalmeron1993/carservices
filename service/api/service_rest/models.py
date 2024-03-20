from django.db import models
from django.urls import reverse


# Create your models here.
class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveBigIntegerField(unique=True)
    
    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.id})

    def __str__(self):
        return self.name


class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    customer_name = models.CharField(max_length=200)
    customer_phone = models.CharField(max_length=200)
    customer_email = models.EmailField(max_length=200)
    technician = models.ForeignKey(Technician, related_name='appointments', on_delete=models.CASCADE)

    def get_api_url(self):
        return reverse("api_list_appointment", kwargs={"pk": self.id})

    def __str__(self):
        return self.customer_name


class AutoVO(models.Model):
    vin_number = models.CharField(max_length=200, unique=True)
    import_url = models.CharField(max_length=200, unique=True)
    
    def __str__(self):
        return self.vin_number