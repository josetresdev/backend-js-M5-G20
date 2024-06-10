const http = require('http');
const url = require('url');
const fs = require('fs');

// Base de datos de productos
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

// Función para manejar las solicitudes
const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    if (method === 'GET') {
        if (path === '/products') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(products));
        } else if (path.startsWith('/products/')) {
            const id = parseInt(path.split('/')[2]);
            const product = products.find(p => p.id === id);

            if (product) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(product));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Product not found' }));
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Endpoint not found' }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
};

// Crear el servidor
const server = http.createServer(requestHandler);

// Escuchar en el puerto 3002
server.listen(3002, () => {
    console.log('Server is running on port 3002');
});
