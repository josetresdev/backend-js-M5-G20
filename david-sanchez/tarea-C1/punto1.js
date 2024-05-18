let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
for(i =0; i<=libros.length; i++){

}
console.log(libros[1].titulo, libros[1].autor); //Imprime en la consola el nombre y el autor del segundo libro.
libros[0].paginas = 350; // Actualiza el número de páginas del primer libro a 350.
console.log(libros[0]); // Imprime en la consola la información completa del primer libro después de la actualización.
const newlibros = libros.map((libro)=> libro.titulo +  libro.autor);// Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor
console.log(newlibros);