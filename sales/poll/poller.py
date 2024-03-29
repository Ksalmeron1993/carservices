import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

def get_automobile():
    response = requests.get("http://automobile-api:8100/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=auto["href"],
            defaults={
                "make": auto["make"],
                "model": auto["model"],
                "year": auto["year"],
                "color": auto["color"],
                "vin": auto["vin"],
            }
        )
            

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            get_automobile()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
