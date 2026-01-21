"""
URL configuration for config project.
"""
from django.contrib import admin
from django.urls import path, include
from core import views  # <--- Kita tambahkan baris ini untuk memanggil views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # URL khusus untuk Sitemap
    path('sitemap.xml', views.sitemap, name='sitemap'),

    # URL lainnya diarahkan ke core.urls
    path('', include('core.urls')),
]