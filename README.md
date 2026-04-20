# AI Task Manager

## Stack
- FastAPI
- Angular
- PostgreSQL

## Run Backend
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload

## Run Frontend
npm install -g @angular/cli
cd frontend
npm install
ng serve -o

## Docs
http://127.0.0.1:8000/docs
