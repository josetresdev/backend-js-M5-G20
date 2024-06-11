const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('¡Hola, soy Jose, y este es mi servicio')
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor arriba, Jose ${PORT}`);
});