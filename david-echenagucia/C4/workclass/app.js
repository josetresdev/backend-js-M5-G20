const http = require('http');

const PORT = 3000;

const server = http.createServer((req , res) => {
    res.writeHead(200 , {'Content-Type' : 'text/plain'})

    res.end('Hola, kambcode')

})

server.listen(PORT, () => {
    console.log(`Servidor esta siendo escuchado ${PORT}`)
})

console.log("esta es mi aplicacion de nodemon despues de instalar NODEMON")

//spread