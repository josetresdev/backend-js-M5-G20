const http = require ('http');
const fs = require ('fs');

const server = http.createServer((req, res)=>{
    res.writeHead(200,{ 'content-Type': 'text/plain'});
    res.end ('¡hola desde el servidor!');

})
server.listen(3000, () =>{
    console.log('servidor escuchando el puerto 3000');

});


// Inicializa un array con los números del 1 al 1000
const numeros = [];
for (let i = 1; i <= 1000; i++) {
    numeros.push(i);
}

// Verifica si cada número es par o impar
numeros.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} no es par.`);
    }
});

// Agrega una coma después de cada número
const numerosConComa = numeros.map(numero => `${numero},`);

// Escribe los números en un archivo llamado "numeros.txt"
fs.writeFileSync('numeros.txt', numerosConComa.join('\n'));

console.log('Archivo "numeros.txt" creado con éxito.');