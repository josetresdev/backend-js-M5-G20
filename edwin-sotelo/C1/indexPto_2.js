// Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for:
// Calcula la suma de las edades de todos los estudiantes en el array
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

const totalEdades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);
console.log("La suma total de edades es:", totalEdades);


// Calcula el promedio de edad de los estudiantes.
let sumaEdades = 0;
for (let i = 0; i < estudiantes.length; i++) {
    sumaEdades += estudiantes[i].edad;
  }
  const totalEstudiantes = estudiantes.length;
  const promedioEdad = sumaEdades / totalEstudiantes;
  console.log(`El promedio de edad es: ${promedioEdad} años`);

  
