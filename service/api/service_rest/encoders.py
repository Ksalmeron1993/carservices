from common.json import ModelEncoder

from .models import Technician, Appointment, AutoVO

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_number",
    ]

class AutoVOEncoder(ModelEncoder):
    model = AutoVO
    properties = [
        "id",
        "vin_number",
        "import_url",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "technician",
        "auto",
        "date",
        "time",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "auto": AutoVOEncoder(),
    }