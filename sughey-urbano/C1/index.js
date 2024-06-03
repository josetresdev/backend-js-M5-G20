// Punto 1: Acceso y Modificación Básica de Datos
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
  ];
  
  // Imprime en la consola el nombre y el autor del segundo libro
  console.log("Nombre y autor del segundo libro:");
  console.log(libros[1].titulo, "-", libros[1].autor);
  
  // Actualiza el número de páginas del primer libro a 350
  libros[0].paginas = 350;
  
  // Imprime en la consola la información completa del primer libro después de la actualización
  console.log("Información completa del primer libro después de la actualización:");
  console.log(libros[0]);
  
  // Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor
  let nuevoArrayLibros = libros.map(libro => ({ titulo: libro.titulo, autor: libro.autor }));
  console.log("Nuevo array de libros con solo título y autor:");
  console.log(nuevoArrayLibros);
  
  // Punto 2: Cálculo de Estadísticas Básicas
  const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
  ];
  
  // Calcula la suma de las edades de todos los estudiantes en el array
  let sumaEdades = 0;
  for (let estudiante of estudiantes) {
    sumaEdades += estudiante.edad;
  }
  
  // Calcula el promedio de edad de los estudiantes
  let promedioEdad = sumaEdades / estudiantes.length;
  
  // Imprime en la consola tanto la suma como el promedio de edad de los estudiantes
  console.log("Suma de las edades de los estudiantes:", sumaEdades);
  console.log("Promedio de edad de los estudiantes:", promedioEdad);
  
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
  