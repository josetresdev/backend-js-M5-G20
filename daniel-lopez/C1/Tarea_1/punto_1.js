let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
console.log(`Título: ${libros[1].titulo}, Autor: ${libros[1].autor}`);
libros[0].paginas = 350;
console.log(libros[0]);
let librosTitulosYAutores = libros.map(libro => {
    return {
        titulo: libro.titulo,
        autor: libro.autor
    };
});
console.log(librosTitulosYAutores);
