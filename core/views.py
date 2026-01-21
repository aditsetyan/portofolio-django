from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def skills(request):
    return render(request, 'skills.html')

def projects(request):
    return render(request, 'projects.html')

# --- Fungsi Sitemap Tambahan ---
def sitemap(request):
    # Mendapatkan domain otomatis (misal: https://aditsetyanugroho.vercel.app)
    scheme = request.scheme
    host = request.get_host()
    base_url = f"{scheme}://{host}"

    # Daftar halaman yang ingin didaftarkan ke Google
    # Pastikan nama-nama ini ('home', 'about', 'skills', 'projects') 
    # SAMA PERSIS dengan 'name=' di file urls.py
    pages = ['home', 'about', 'skills', 'projects']
    
    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for page in pages:
        try:
            full_url = base_url + reverse(page)
            xml_content += '  <url>\n'
            xml_content += f'    <loc>{full_url}</loc>\n'
            xml_content += '    <changefreq>monthly</changefreq>\n'
            xml_content += '    <priority>0.8</priority>\n'
            xml_content += '  </url>\n'
        except:
            continue
    
    xml_content += '</urlset>'

    return HttpResponse(xml_content, content_type="application/xml")