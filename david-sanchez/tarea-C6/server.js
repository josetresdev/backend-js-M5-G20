const http = require('http');

// Base de datos de productos
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
];

// Función para manejar las solicitudes
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Configurar el encabezado de la respuesta
    res.setHeader('Content-Type', 'application/json');

    if (method === 'GET' && url === '/products') {
        // Endpoint GET /products
        res.writeHead(200);
        res.end(JSON.stringify(products));
    } else if (method === 'GET' && url.startsWith('/products/')) {
        // Endpoint GET /products/:id
        const id = parseInt(url.split('/')[2]);
        const product = products.find(p => p.id === id);

        if (product) {
            res.writeHead(200);
            res.end(JSON.stringify(product));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: 'Product not found' }));
        }
    } else {
        // Responder con 404 para cualquier otra solicitud
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
};

// Crear el servidor
const server = http.createServer(requestHandler);

// Configurar el puerto
const PORT = 3002;

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor arriba en http://localhost:${PORT}/`);
});
