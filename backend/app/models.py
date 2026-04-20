from sqlalchemy import Column, Integer, String, DateTime, Enum
from datetime import datetime
from app.database import Base
import enum

class StatusEnum(str, enum.Enum):
    TODO = "TODO"
    IN_PROGRESS = "IN_PROGRESS"
    DONE = "DONE"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(120), nullable=False)
    description = Column(String, nullable=True)
    assignee = Column(String, nullable=False)
    status = Column(Enum(StatusEnum), default=StatusEnum.TODO)
    createdAt = Column(DateTime, default=datetime.utcnow)
    dueDate = Column(DateTime, nullable=True)
