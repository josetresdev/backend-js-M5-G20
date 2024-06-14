const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

let items = [
    { id: 1, name: "Item 1", description: "Descripción de elemento" },
    { id: 2, name: "Item 2", description: "Descripción de elemento" },
  ];

  app.get('/items/:id' ,(req,res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (items){
        res.json(items)

    } else {
        res.status(404).send('Item not found')
    }
  });

  app.listen(port,() => {
    console.log(`API listening at http://localhost:${port}`);
  })