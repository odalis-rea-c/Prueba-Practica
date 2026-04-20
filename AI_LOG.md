## Entrada #1 — Claude Code
Prompt: La creación del CRUD FastAPI.
Problema: No se creaban las tablas.
Corrección: Añadí Base.metadata.create_all

## Entrada #2 — Claude Code
Prompt: La configuración a la conexión a PostgreSQL en FastAPI usando SQLAlchemy.
Problema: La base de datos no existía en PostgreSQL, por lo que fallaba la conexión.
Corrección: Se creó la base de datos CREATE DATABASE task_manager

## Entrada #3 — Claude Code
Prompt: La implementación de endpoint PATCH en FastAPI para actualizar el estado de una tarea usando un Enum.
Problema: En la implementación del endpoint la modificación de estado, se generó un error referente a la utilización de Enum.
Corrección: Se manejó el estado mediante cadena de texto (string).
