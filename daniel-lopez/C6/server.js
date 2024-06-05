// server.js
const http = require('http');
const fs = require('fs');
const port = 3002;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/products') {
        // Leer el archivo JSON y devolver la lista de productos
        fs.readFile('products.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error al leer el archivo' }));
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    } else if (req.method === 'GET' && req.url.startsWith('/products/')) {
        // Obtener el ID del producto desde la URL
        const id = parseInt(req.url.split('/')[2], 10);

        // Leer el archivo JSON y buscar el producto por ID
        fs.readFile('products.json', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error al leer el archivo' }));
                return;
            }

            const products = JSON.parse(data);
            const product = products.find(p => p.id === id);

            if (product) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(product));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Producto no encontrado' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Recurso no encontrado' }));
    }
});

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
