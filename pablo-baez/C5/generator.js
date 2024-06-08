const fs = require('fs');

let numbers = '';
for (let i = 1; i <= 1000; i++) {
    numbers += i + '\n';
}


fs.appendFile("./numeros.txt", numbers, function (err) {
    if (err) throw err;
    console.log("Creado Exitosamente!");
});
