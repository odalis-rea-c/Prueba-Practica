from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.models import Task
from app.routes import tasks

app = FastAPI()

Base.metadata.create_all(bind=engine)

# Ruta raíz (IMPORTANTE)
@app.get("/")
def root():
    return {"message": "API Task Manager funcionando 🚀"}

# CORS (Angular)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200", "http://127.0.0.1:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(tasks.router, prefix="/api/tasks", tags=["tasks"])
