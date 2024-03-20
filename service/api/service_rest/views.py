from common.json import ModelEncoder
from django.shortcuts import render
from .models import Technician, Appointment, AutoVO
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
# Create your views here.

class AutoVOEncoder(ModelEncoder):
    model = AutoVO
    properties = ['vin_number', 'import_url', 'id']

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ['name', 'employee_number', 'id']

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ['date', 'time', 
                  'customer_name', 'customer_phone', 
                  'customer_email', 'technician', 'id']


@require_http_methods(["GET", "POST"])
def technician_list(request):
    if request.method == "GET":
        return JsonResponse(list(Technician.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        technician = Technician.objects.create(name=data['name'], employee_number=data['employee_number'])
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)


@require_http_methods(["GET", "PUT", "DELETE"])
def technician_detail(request, pk):
    try:
        technician = Technician.objects.get(pk=pk)
    except Technician.DoesNotExist:
        return JsonResponse({'error': 'Technician does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        technician.name = data['name']
        technician.employee_number = data['employee_number']
        technician.save()
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)
    elif request.method == "DELETE":
        technician.delete()
        return JsonResponse({'success': 'Technician deleted'}, status=204)

@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        return JsonResponse(list(Appointment.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        technician = Technician.objects.get(pk=data['technician'])
        appointment = Appointment.objects.create(date=data['date'], time=data['time'], 
                                                 customer_name=data['customer_name'], 
                                                 customer_phone=data['customer_phone'], 
                                                 customer_email=data['customer_email'], 
                                                 technician=technician)
        return JsonResponse(AppointmentEncoder().default(appointment), safe=False)
    

@require_http_methods(["GET", "PUT", "DELETE"])
def api_detail_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(pk=pk)
    except Appointment.DoesNotExist:
        return JsonResponse({'error': 'Appointment does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(AppointmentEncoder().default(appointment), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        technician = Technician.objects.get(pk=data['technician'])
        appointment.date = data['date']
        appointment.time = data['time']
        appointment.customer_name = data['customer_name']
        appointment.customer_phone = data['customer_phone']
        appointment.customer_email = data['customer_email']
        appointment.technician = technician
        appointment.save()
        return JsonResponse(AppointmentEncoder().default(appointment), safe=False)
    elif request.method == "DELETE":
        appointment.delete()
        return JsonResponse({'success': 'Appointment deleted'}, status=204)