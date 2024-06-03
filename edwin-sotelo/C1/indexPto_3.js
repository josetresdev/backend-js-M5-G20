// Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
// Utilizando filter debes cfiltrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

const ropa = productos.filter(producto => producto.categoria === "Ropa");
ropa.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}`);
  });

// Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
const precioMayor = productos.filter(producto => producto.precio > 30);
precioMayor.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}`);
  });