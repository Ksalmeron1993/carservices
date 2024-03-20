from django.urls import path
from .views import technician_list, technician_detail, api_list_appointments, api_detail_appointment

urlpatterns = [
    path('technicians/', technician_list),
    path('technicians/<int:pk>/', technician_detail),
    path('appointments/', api_list_appointments),
    path('appointments/<int:pk>/', api_detail_appointment),
]