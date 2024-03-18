from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    color = models.CharField(max_length=100)
    vin = models.CharField(max_length=100)
    import_href = models.URLField()

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"

    def get_absolute_url(self):
        return reverse("automobile-detail", kwargs={"pk": self.pk})

class SalesPerson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(unique=True, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def get_absolute_url(self):
        return reverse("salesperson-detail", kwargs={"pk": self.pk})

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def get_absolute_url(self):
        return reverse("customer-detail", kwargs={"pk": self.pk})

class Sale(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="sales", on_delete=models.CASCADE)
    sales_person = models.ForeignKey(SalesPerson, related_name="sales", on_delete=models.CASCADE,null=True, blank=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    sale_price = models.DecimalField(max_digits=10, decimal_places=2)
    sale_date = models.DateField()

    def __str__(self):
        return f"{self.automobile} {self.customer} {self.sale_price}"

    def get_absolute_url(self):
        return reverse("sale-detail", kwargs={"pk": self.pk})