// generator.js
const fs = require('fs');

const generateNumbers = () => {
  const numbers = Array.from({ length: 1000 }, (_, i) => i + 1).join('\n');
  fs.writeFile('numeros.txt', numbers, (err) => {
    if (err) throw err;
    console.log('El archivo numeros.txt ha sido creado.');
  });
};

generateNumbers();
