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
let promedioEdad = sumaEdades / estudiantes.length;

console.log(`Suma de edades: ${sumaEdades}`);
console.log(`Promedio de edad: ${promedioEdad.toFixed(2)}`);
