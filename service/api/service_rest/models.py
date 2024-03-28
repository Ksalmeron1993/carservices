from django.db import models
from django.urls import reverse


# Create your models here.
class AutoVO(models.Model):
    vin = models.CharField(max_length=100)
    import_href = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.vin

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"pk": self.id})

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_id = models.PositiveBigIntegerField(unique=True)
    
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