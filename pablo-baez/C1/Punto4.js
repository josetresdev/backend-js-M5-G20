const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let estudianteConMayorPromedio = estudiantes[0];

for (let i = 1; i < estudiantes.length; i++) 
    {
    if (estudiantes[i].promedio > estudianteConMayorPromedio.promedio) {
        estudianteConMayorPromedio = estudiantes[i];
    }
}

console.log('Estudiante con el mayor promedio:', estudianteConMayorPromedio);
