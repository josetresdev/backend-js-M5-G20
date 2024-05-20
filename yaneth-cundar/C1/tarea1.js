
///PUNTO 1***
console.log("====1=====")
let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

//para ver el segundo autor

const autorSegundoLibro = libros[1].autor;
console.log(`a) El autor del segundo libro es:${autorSegundoLibro}`);


// Actualiza las páginas del Libro 1 a 350
libros[0].paginas = 350;

// Muestra el Libro 0 actualizado
const libroActualizado = libros[0];
console.log("b) Se actualizaron las paginas del libro 1 de 300 a 350");
console.log("c) Libro 0 actualizado:", libroActualizado);

//utilizando map

const titulosYAutores = libros.map(libro=>({ titulo: libro.titulo, autor: libro.autor}));
console.log ("d)" , titulosYAutores);



///PUNTO 2*** 
console.log("====2=====")
/*
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
*/
/*
const edades = [];
estudiantes.forEach(estudiante => {
    edades.push(estudiante.edad);
});
let sumaEdades = 0;
estudiantes.forEach(estudiante => {
    sumaEdades += estudiante.edad;
});

console.log(`La suma de las edades es: ${sumaEdades}`);


console.log(edades);
*/
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 }
];

let sumaEdades = 0;

for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
}

console.log(`a) La suma de las edades es: ${sumaEdades}`);



const cantidadEstudiantes = estudiantes.length;
const promedioEdades = sumaEdades / cantidadEstudiantes;

console.log(`b) El promedio de las edades es: ${promedioEdades} años`);

console.log(`c) Se imprimieron los dos resultados`);


///PUNTO 3*** 
console.log("====3====")

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];
// Filtrar productos con categoría 'Ropa'
const productosRopa = productos.filter(producto => producto.categoria === 'Ropa');

// Imprimir los productos filtrados
productosRopa.forEach(producto => {
    console.log(`a) Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});

// Filtrar productos con precio mayor de 30
const preciosMayores = productos.filter(producto => producto.precio > 30);

console.log("==")
// Imprimir los productos filtrados
preciosMayores.forEach(producto => {
    console.log(`b) Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
});
console.log("FIN EJERCICIO");