
const http = require('http');


const products = [
    
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
    
];
const server = http.createServer((req, res) => {
   
    if (req.url === '/products' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'aplication/json'});
        res.end(JSON.stringify(products));

    } else if (req.url === '/products' && req.method === 'GET') {
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
