const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let total= 0;
for (let i = 0; i < estudiantes.length; i++) {
let sumaDeEdades = estudiantes[i]

    total += sumaDeEdades.edad;

}
console.log("La suma de las edades es: " , total)
console.log("El promedio de las edades es: " ,total/estudiantes.length)
console.log("La suma de las edades es: " , total , "y El promedio de las edades es: " ,total/estudiantes.length)