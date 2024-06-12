# Estudiantes API TAREA CLASE 7

Esta es una API básica para gestionar una lista de estudiantes utilizando Node.js y la librería `Express`.

## Endpoints

### GET /students
Retorna la lista de todos los estudiantes.

- **URL**: `http://localhost:3002/students`
- **Método**: GET

### GET /students/:id
Retorna los detalles de un estudiante específico basado en el ID.

- **URL**: `http://localhost:3002/students/:id`
- **Método**: GET
- **Parámetros**: 
  - `id` (número): ID del estudiante que deseas obtener.

### DELETE /students/:id
Elimina un estudiante específico basado en el ID.

- **URL**: `http://localhost:3002/students/:id`
- **Método**: DELETE
- **Parámetros**:
  - `id` (número): ID del producto que deseas eliminar.

