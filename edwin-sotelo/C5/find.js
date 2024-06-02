const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error leyendo el archivo:', err);
      return;
    }

    const numeros = data.split(',').map(Number);
    const numerosPares = numeros.filter(number => number % 2 === 0);
    console.log('Los numeros pares son:' + numerosPares);
  });
