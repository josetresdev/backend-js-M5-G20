const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (err, data) => {
  if (err) throw err;

  const numbers = data.split('\n').map(Number);
  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log('Números pares:', evenNumbers.join(', '));

  // (Opcional) Escribir los números pares en un archivo nuevo
  fs.writeFile('numeros_pares.txt', evenNumbers.join('\n'), (err) => {
    if (err) throw err;
    console.log('El archivo numeros_pares.txt ha sido generado.');
  });
});

// const numberString = Math.floor(Math.random() * 100) +1;

// const numero = parseInt(numberString); // parseInt convierte un string a número
// if (numero % 2 === 0) {
//    console.log('El número es par');
// } else {
//     console.log('El número no es par');
// }


