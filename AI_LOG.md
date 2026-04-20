## Entrada #1 — ChatGPT
Prompt: La creación del CRUD FastAPI.
Problema: No se creaban tablas.
Corrección: Base.metadata.create_all agregado

## Entrada #2 — ChatGPT
Prompt: La configuración a la conexión a PostgreSQL en FastAPI usando SQLAlchemy.
Problema: La base de datos no existía en PostgreSQL.
Corrección: CREATE DATABASE task_manager

## Entrada #3 — ChatGPT
Prompt: La implementación de endpoint PATCH en FastAPI para actualizar el estado de una tarea usando un Enum.
Problema: En la implementación del endpoint la modificación de estado, se generó un error referente a la utilización de Enum.
Corrección: Manejo mediante cadena de texto (string).
