let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];
const catRopa = productos.filter((producto)=> producto.categoria = 'Ropa');
console.log(catRopa);
const preciosMayiores = productos.filter((producto)=> producto.precio >30);
console.log(preciosMayiores);