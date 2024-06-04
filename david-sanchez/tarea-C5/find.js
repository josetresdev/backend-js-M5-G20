const fs = require('fs');

fs.readFile('numeros.txt','utf8',(err,data)=>{
    if (err){
        console.error('Error al leer el archivo;', err);
        return;
    }

    const numero =  data.split(',').map((num => parseInt(num)));

    const evenNumber = numero.filter(num => num % 2 === 0);

    console.log('numero pares:', evenNumber);
})