const http = require('http');
const fs = require('fs');
const url = require('url');

// Leer los datos del archivo products.json
const getProducts = () => {
    const data = fs.readFileSync('productos.json');
    return JSON.parse(data);
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    if (method === 'GET' && path === '/productos') {
        // Productos
        const products = getProducts();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    } else if (method === 'GET' && path.match(/^\/productos\/\d+$/)) {
        // Productos por id
        const id = parseInt(path.split('/')[2]);
        const products = getProducts();
        const product = products.find(p => p.id === id);

        if (product) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Producto no Funciona' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint no funciona' }));
    }
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
