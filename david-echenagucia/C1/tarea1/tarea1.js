let libros = [
  { titulo: "El Hobbit", autor: "J.R.R. Tolkien", paginas: 300 },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 400,
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    paginas: 350,
  },
];
libros.forEach((libro, i) => {
  if (i === 1) {
    console.log("Esta es el titulo del segundo libro: ", libro.titulo);
    console.log("Este es el nombre del autor del segundo libro: ", libro.autor);
  }
});

libros[0].paginas = 350;
console.log("Se actualizo el numero de paginas:", libros[0].paginas);
console.log("El arreglo actualizado completo es el siguiente:", libros[0]);

let nuevoArray = libros.map(function (libros) {
  return {
    titulo: libros.titulo,
    autor: libros.autor,
  };
});

console.log(nuevoArray)