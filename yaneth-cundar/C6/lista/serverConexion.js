
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.end('Ejecutado correctamente');
    } else if (req.url === '/saludo' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.end('Ejecutado, hola, soy el primero en crear esto');
    } else if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.end('Hola, estos son mis users');
    } else {
        res.writeHead(404, {'Content-Type': 'text-plain'});
        res.end('Ruta no está especificada');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor arriba, Yaneth ${PORT}`);
});
