const http = require ('http');

const server= http.createServer((req, res) =>{
    res.writeHead(200, { 'content-type': 'textplain'});
    res.end('Hola desde el servidor');
});

server.listen (2000, () => {
    console.log('Servidor escuchando en el puerto 3000')
});