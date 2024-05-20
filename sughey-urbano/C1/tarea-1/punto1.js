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
  
 