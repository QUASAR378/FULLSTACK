from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    email=models.EmailField()
    phone_number = models.CharField(max_length=15, unique=True)
    password=models.CharField(max_length=15)
    
    def __str__(self):
        return self.first_name
