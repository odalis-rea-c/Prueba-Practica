from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from app.models import StatusEnum

class TaskCreate(BaseModel):
    title: str = Field(..., max_length=120)
    description: Optional[str] = None
    assignee: str
    dueDate: Optional[datetime] = None
    status: Optional[StatusEnum] = StatusEnum.TODO

class TaskResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    assignee: str
    status: str
    createdAt: datetime
    dueDate: Optional[datetime]

    class Config:
        from_attributes = True

class TaskStatusUpdate(BaseModel):
    status: str
