# Estudiantes API TAREA CLASE 8

Esta es una API básica para gestionar una lista de estudiantes utilizando Node.js y la librería `Express` incluyendo middlewares de verificacion de datos y un token de autenticación.

## Endpoints

# Key: '12345' / Value: 'token kambcode'

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

### POST /students/
**URL**: `Introduce http://localhost:3002/students`
Headers: Agrega un nuevo header.
Key y Value
Body: Selecciona raw y JSON en el dropdown.
Introduce el cuerpo de la solicitud 

### PUT /students/:id
**URL**: `Introduce http://localhost:3002/students/1` (cambia 1 por el ID del estudiante que quieras actualizar).
Headers: Agrega un nuevo header.
Key y Value
Body: Selecciona raw y JSON en el dropdown.
Introduce el cuerpo de la solicitud 

