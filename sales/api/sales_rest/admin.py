from django.contrib import admin
from .models import AutomobileVO, SalesPerson, Customer, Sale


# Register your models here.
@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    list_display = ('make', 'model', 'year', 'color', 'vin', )


@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'employee_number')


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'address')


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    list_display = ('automobile','sales_person', 'customer', 'sale_price', 'sale_date')
    