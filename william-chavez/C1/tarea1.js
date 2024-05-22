let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
]
const Libros =()=>{
    console.log(libros)
}
Libros()
const li =()=>{
    console.log((libros[1].titulo))
    console.log((libros[1].autor))
    console.log(libros[2].paginas)
    console.log(libros[0])
}
li()
let userFullnames = libros.map(function(element){
    return `${element.titulo},${element.autor}`;
})

console.log(userFullnames);
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
const sumaredad= estudiantes.reduce((total,estudiante)=> total + estudiante.edad, 0)
console.log("la suma de las edades es de",sumaredad)
const promedio = sumaredad / estudiantes.length
console.log("el promedio de los estudiantes es de",promedio)

let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];
const RopaC = productos.filter(nombre => nombre.categoria == "Ropa")
console.log(RopaC)
const PreciosMayores = productos.filter(nombre => nombre.precio > 30)
console.log(PreciosMayores)