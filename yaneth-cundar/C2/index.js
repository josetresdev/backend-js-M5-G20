    // index.js
    import Chance from 'chance';
    
    const chance = new Chance();
    
    // Generar datos aleatorios
    const nombre = chance.name();
    const correo = chance.email();
    const fechaNacimiento = chance.birthday();
    const telefono = chance.phone();
    
    // Imprimir los datos aleatorios generados
    console.log("Datos aleatorios generados:");
    console.log("Nombre:", nombre);
    console.log("Correo electrónico:", correo);
    console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
    console.log("Teléfono:", telefono);