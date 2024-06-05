const fs = require('fs');

//Leer archivo
fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) throw err;
    
    // Dividir el contenido del archivo en un array de números
    const numbers = data.split('\n').filter(Boolean);
    
    // Encontrar los números pares
    const evenNumbers = numbers.filter(number => {
        const num = parseInt(number);
        return num % 2 === 0;
    });

    // Números pares en consola
    console.log('Números pares:', evenNumbers.join(', '));

    // Números pares en un nuevo archivo
    const evenNumbersContent = evenNumbers.join('\n');
    fs.writeFile('numeros_pares.txt', evenNumbersContent, (err) => {
        if (err) throw err;
        console.log('Numeros_pares.txt generado exitosamente');
    });
});
