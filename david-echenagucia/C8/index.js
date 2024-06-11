const express = require ('express');
const app = express();
const port = 3000;

app.use(express.json());

const logger = (req, res , next) => {
    console.log(`${req.method} ${req.url}`);
    next();
    }
    
app.use(logger);

let items = [];

app.get('/' , (req ,res) => {
    res.send('Hola, soy yo y mi primera API');
});

app.post('/items' , (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
}
)

app.get('/items' , (req , res) => {
    res.send(items);
})

app.put('/items/:id' , (req , res) => {
    const { id } =req.params;
    const newItems = req.body;
    items = items.map(item => item.id == id ? newItems : item);
    res.send(newItems);
}),

app.delete('/items/:id' , (req , res) => {
    const { id } =req.params;
    items = items.filter(item => item.id != id);
    res.send(newItems);
}),





app.listen(port , () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})