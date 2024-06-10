const fs = require('fs');
const express = require('express');

// Lee el contenido del archivo
fs.readFile('productos.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Analiza el contenido como JSON
  const productos = JSON.parse(data);
  console.log(productos);

  // Crea una instancia de Express
  const app = express();

  // Define la ruta /api/productos
  app.get('/api/productos', (req, res) => {
    res.json(productos);
  });

  // Define la ruta para un solo producto
  app.get('/api/productos/:id', (req, res) => {
    const productId = parseInt(req.params.id); // Convierte el ID a número
    // Busca el producto correspondiente en tu lista de productos
    const productoEncontrado = productos.products.find(producto => producto.id === productId);

    if (!productoEncontrado) {
      res.status(404).json({ error: 'Producto no encontrado' });
    } else {
      res.json(productoEncontrado);
    }
  });

  // Inicia el servidor en el puerto 3000
  app.listen(3000, () => {
    console.log('Servidor Express iniciado en el puerto 3000');
  });
});

