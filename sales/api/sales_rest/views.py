from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SaleEncoder,
)
from .models import AutomobileVO,SalesPerson, Customer, Sale

# views
@require_http_methods(["GET", "POST"])
def salesperson_list(request):
    if request.method == "GET":
        return JsonResponse(list(SalesPerson.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        salesperson = SalesPerson.objects.create(first_name=data['first_name'], last_name=data['last_name'], employee_number=data['employee_number'])
        return JsonResponse(SalesPersonEncoder().default(salesperson), safe=False)

@require_http_methods(["GET", "PUT", "DELETE"])
def salesperson_detail(request, pk):
    try:
        salesperson = SalesPerson.objects.get(pk=pk)
    except SalesPerson.DoesNotExist:
        return JsonResponse({'error': 'SalesPerson does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(SalesPersonEncoder().default(salesperson), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        salesperson.first_name = data['first_name']
        salesperson.last_name = data['last_name']
        salesperson.employee_number = data['employee_number']
        salesperson.save()
        return JsonResponse(SalesPersonEncoder().default(salesperson), safe=False)
    elif request.method == "DELETE":
        salesperson.delete()
        return JsonResponse({'success': 'SalesPerson deleted'}, status=204)

@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        return JsonResponse(list(Customer.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        customer = Customer.objects.create(first_name=data['first_name'], last_name=data['last_name'], address=data['address'])
        return JsonResponse(CustomerEncoder().default(customer), safe=False)

@require_http_methods(["GET", "PUT", "DELETE"])
def customer_detail(request, pk):
    try:
        customer = Customer.objects.get(pk=pk)
    except Customer.DoesNotExist:
        return JsonResponse({'error': 'Customer does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(CustomerEncoder().default(customer), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        customer.first_name = data['first_name']
        customer.last_name = data['last_name']
        customer.address = data['address']
        customer.save()
        return JsonResponse(CustomerEncoder().default(customer), safe=False)
    elif request.method == "DELETE":
        customer.delete()
        return JsonResponse({'success': 'Customer deleted'}, status=204)
    
@require_http_methods(["GET", "POST"])
def sale_list(request):
    if request.method == "GET":
        return JsonResponse(list(Sale.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        automobile = AutomobileVO.objects.get(pk=data['automobile'])
        salesperson = SalesPerson.objects.get(pk=data['sales_person'])
        customer = Customer.objects.get(pk=data['customer'])
        sale = Sale.objects.create(automobile=automobile, sales_person=salesperson, customer=customer, sale_price=data['sale_price'], sale_date=data['sale_date'])
        return JsonResponse(SaleEncoder().default(sale), safe=False)

@require_http_methods(["GET", "PUT", "DELETE"])
def sale_detail(request, pk):
    try:
        sale = Sale.objects.get(pk=pk)
    except Sale.DoesNotExist:
        return JsonResponse({'error': 'Sale does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(SaleEncoder().default(sale), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        automobile = AutomobileVO.objects.get(pk=data['automobile'])
        salesperson = SalesPerson.objects.get(pk=data['sales_person'])
        customer = Customer.objects.get(pk=data['customer'])
        sale.automobile = automobile
        sale.sales_person = salesperson
        sale.customer = customer
        sale.sale_price = data['sale_price']
        sale.sale_date = data['sale_date']
        sale.save()
        return JsonResponse(SaleEncoder().default(sale), safe=False)
    elif request.method == "DELETE":
        sale.delete()
        return JsonResponse({'success': 'Sale deleted'}, status=204)