from django.db import models
from django.contrib.auth.models import User


class Department(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=40)

class Employee(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=40)
    Department = models.CharField(max_length=40)
    DateOfJoining = models.DateField()
    ProfilePic = models.ImageField(default="avatar.png", null=True, blank=True)
