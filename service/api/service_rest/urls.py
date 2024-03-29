from django.urls import path
from .views import api_list_technicians, api_detail_technician, api_list_appointments, api_detail_appointment

urlpatterns = [
    path('technicians/', api_list_technicians),
    path('technicians/<int:pk>/', api_detail_technician),
    path('appointments/', api_list_appointments),
    path('appointments/<int:pk>/', api_detail_appointment),
]