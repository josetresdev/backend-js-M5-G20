# Product API

## Descripción
Esta es una API básica que gestiona una lista de productos, permitiendo obtener todos los productos o un producto específico por su ID.

## Endpoints

### GET /products
Retorna la lista de todos los productos en formato JSON.

#### Ejemplo de Respuesta
```json
[
    { "id": 1, "name": "Laptop", "price": 999.99, "category": "Electronics" },
    { "id": 2, "name": "Chair", "price": 49.99, "category": "Furniture" },
    { "id": 3, "name": "Pen", "price": 1.99, "category": "Stationery" }
]
