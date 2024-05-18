const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];
let sumArray = 0;
let promedio = 0;
for (i = 0; i<estudiantes.length; i++){
 sumArray = sumArray + estudiantes[i].edad ; // Calcula la suma de las edades de todos los estudiantes en el array
 promedio = sumArray / 6;
}
console.log('suma de edades',sumArray,'promedio de edad',promedio); //Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

