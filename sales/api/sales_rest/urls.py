from django.urls import path

from .views import (
    salesperson_list,
    salesperson_detail,
    customer_list,
    customer_detail,
    sale_list,
    sale_detail,
)

urlpatterns = [
    path(
        "salespeople/",
        salesperson_list,
        name="api_salespersons",
    ),
    path(
        "salespeople/<int:pk>/",
        salesperson_detail,
        name="api_salesperson",
    ),
    path(
        "customers/",
        customer_list,
        name="api_customers",
    ),
    path(
        "customers/<int:pk>/",
        customer_detail,
        name="api_customer",
    ),
    path(
        "sales/",
        sale_list,
        name="api_sales",
    ),
    path(
        "sales/<int:pk>/",
        sale_detail,
        name="api_sale",
    ),
]