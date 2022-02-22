git clone https://github.com/MuhammadTaneem/income-expenses.git\
python -m venv venv\
venv\Scripts\activate.bat\
pip install -r requirements.txt\
python manage.py  makemigrations\
python manage.py migrate\
**[live server]( https://income-expenditure.herokuapp.com/)**