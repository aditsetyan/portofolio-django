# Install dependencies menggunakan Python 3.9
python3.9 -m pip install -r requirements.txt

# Jalankan perintah collectstatic untuk mengumpulkan file statis
python3.9 manage.py collectstatic --noinput --clear