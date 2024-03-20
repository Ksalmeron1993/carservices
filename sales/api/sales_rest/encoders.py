from common.json import ModelEncoder

from .models import AutomobileVO, SalesPerson, Customer, Sale


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "make",
        "model",
        "year",
        "color",
        "vin",
        "import_href",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "first_name",
        "last_name",
        "address",
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "sale_price",
        "sale_date",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }