const fs = require('fs');

let numeros = '';
for (let i = 1; i <= 1000; i++) {
    if (i > 1) {
        numeros += ',';
}
        numeros += i;
}

fs.writeFile('numeros.txt', numeros, (err) => {
  if (err) throw err;
  console.log('Archivo generado con exito!');
});