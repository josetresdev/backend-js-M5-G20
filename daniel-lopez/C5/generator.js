const fs = require('fs');

const numeros = Array.from({ length: 1000 }, (_, i) => i + 1);

const contenido = numeros.join(',');


fs.writeFile('numeros.txt', contenido, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo numeros.txt generado exitosamente.');
    }
});