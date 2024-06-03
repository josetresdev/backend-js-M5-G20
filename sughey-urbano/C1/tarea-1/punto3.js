  // Punto 3: Búsqueda y Filtrado de Datos
  let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
  ];
  
  // Filtra productos que tengan la categoría 'Ropa' e imprímelos en pantalla
  let productosRopa = productos.filter(producto => producto.categoria === 'Ropa');
  console.log("Productos de la categoría 'Ropa':");
  console.log(productosRopa);
  
  // Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores
  let preciosMayores = productos.filter(producto => producto.precio > 30);
  console.log("Productos con precio mayor de 30:");
  console.log(preciosMayores);
  