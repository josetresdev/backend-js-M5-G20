// find.js
const fs = require('fs');

const findEvenNumbers = () => {
  fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const numbers = data.split('\n').map(Number);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log('Números pares:', evenNumbers.join(', '));

    // Opcional: Crear un archivo con los números pares
    fs.writeFile('numeros_pares.txt', evenNumbers.join('\n'), (err) => {
      if (err) throw err;
      console.log('El archivo numeros_pares.txt ha sido creado.');
    });
  });
};

findEvenNumbers();
