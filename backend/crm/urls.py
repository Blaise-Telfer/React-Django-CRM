from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
	path('department/', views.departmentApi, name="department"),
	path('customer/', views.employeeApi, name="customer")
	
]