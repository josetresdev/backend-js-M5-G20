
const fs = require('fs');


fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const numeros = data.split(',').map(num => parseInt(num, 10));

    const pares = numeros.filter(num => num % 2 === 0);

    console.log(`Número de pares: ${pares.length}`);

    const paresContenido = pares.join('\n');
    fs.writeFile('numeros_pares.txt', paresContenido, (err) => {
        if (err) {
            console.error('Error al escribir el archivo de números pares:', err);
        } else {
            console.log('Archivo numeros_pares.txt generado exitosamente.');
        }
    });
});