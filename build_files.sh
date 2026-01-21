# 1. Pastikan PIP terinstall di Python 3.9
python3.9 -m ensurepip --default-pip

# 2. Install dependencies (Django, dll)
python3.9 -m pip install -r requirements.txt

# 3. Kumpulkan file statis
python3.9 manage.py collectstatic --noinput --clear