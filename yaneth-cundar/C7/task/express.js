const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

let items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});


app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
});

// Endpoint para crear un nuevo item
app.post('/items', (req, res) => {
    const newItem = {
      id: items.length + 1,
      name: req.body.name,
      description: req.body.description
    };
    items.push(newItem);
    res.status(201).json(newItem);
});
  
  // Endpoint para actualizar un item existente (PUT)
  app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
      item.name = req.body.name;
      item.description = req.body.description;
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  });
  
  // Endpoint para actualizar parcialmente un item existente (PATCH)
  app.patch('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (item) {
      if (req.body.name) item.name = req.body.name;
      if (req.body.description) item.description = req.body.description;
      res.json(item);
    } else {
      res.status(404).send('Item not found');
    }
  });
  
  // Endpoint para eliminar un item
  app.delete('/items/:id', (req, res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id));
    res.status(204).send();
  });

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
  