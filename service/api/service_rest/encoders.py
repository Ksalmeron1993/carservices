from common.json import ModelEncoder

from .models import Technician, Appointment

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_id",
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
        "technician": TechnicianEncoder(),}