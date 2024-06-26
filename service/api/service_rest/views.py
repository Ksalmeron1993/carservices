from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    TechnicianEncoder,
    AppointmentEncoder,
)

from .models import Technician, Appointment


#views
@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        return JsonResponse(list(Technician.objects.all().values()), safe=False)
    elif request.method == "POST":
        data = json.loads(request.body)
        technician = Technician.objects.create(name=data['name'], employee_id=data['employee_id'])
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)

@require_http_methods(["GET", "PUT", "DELETE"])
def api_detail_technician(request, pk):
    try:
        technician = Technician.objects.get(pk=pk)
    except Technician.DoesNotExist:
        return JsonResponse({'error': 'Technician does not exist'}, status=404)
    if request.method == "GET":
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)
    elif request.method == "PUT":
        data = json.loads(request.body)
        technician.name = data['name']
        technician.employee_id = data['employee_id']
        technician.save()
        return JsonResponse(TechnicianEncoder().default(technician), safe=False)
    elif request.method == "DELETE":
        technician.delete()
        return JsonResponse({'success': 'Technician deleted'}, status=204)

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
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