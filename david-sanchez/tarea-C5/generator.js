const fs = require('fs');

let numero = '';
for (let i = 1; i<= 1000; i++){
    numero= numero + i;
    if(i < 1000){
        numero = numero + ','
    }
}

fs.writeFile('numeros.txt', numero, (err) => {
    if (err) throw err;
    console.log('El archivo numeros.txt ha sido generado con éxito!');
  });