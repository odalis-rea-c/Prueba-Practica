from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_create_task():
    response = client.post("/api/tasks/", json={
        "title": "Test tarea",
        "assignee": "Odalis"
    })

    assert response.status_code == 201
