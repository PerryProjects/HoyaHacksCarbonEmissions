from faker import Faker
import requests
from random import seed, random
import math

seed(0)
Faker.seed(0)

gasOptions = ["NGS", "OIL", "OTH"]
url = 'http://localhost:8000/emissions/'

fake = Faker()
data = {}
for _ in range(10):
	data["name"] = fake.name()
	data["user_type"] = 'C' if int(random()*100 % 2) == 0 else 'R'
	data["heat_type"] = gasOptions[int(random()*100 % 3)]
	data["vehicle_type"] = 'D' if int(random()*100 % 2) == 0 else 'G'
	data["heat"] = fake.pyfloat(positive=False, min_value=0)
	data["electricity"] = fake.pyfloat(positive=False, min_value=0)
	data["air"] = fake.pyint(min_value=0)
	data["rail"] = fake.pyint(min_value=0)
	data["vehicle"] = fake.pyint(min_value=0)
	data["lattitude"] = fake.latitude()
	data["longitude"] = fake.longitude()
	data["time"] = fake.unix_time()
	requests.post(url, data)
	data = {}


