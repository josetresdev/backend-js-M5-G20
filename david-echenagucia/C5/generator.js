const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('¡Bienvenido al servidor básico de Node.js!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT , () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

let numbers= '';
for(let i = 1; i <= 1000; i++){
    numbers += i + '\n';
}


fs.writeFile('numeros.txt', numbers , (err) => {
    if(err) {
        console.log('Erro al escribir archivo')
        return;
    }
    console.log('El archivo fue creado con exito')
})