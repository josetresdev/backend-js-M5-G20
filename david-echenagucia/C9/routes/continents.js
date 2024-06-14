const express = require('express');
const router = express.Router();

let continents = []; 
router.get('/', (req, res) => {
  res.json(continents);
});

router.get('/:id', (req, res) => {
  const continent = continents.find(c => c.id === parseInt(req.params.id));
  if (continent) {
    res.json(continent);
  } else {
    res.status(404).send('Pais no encontrado');
  }
});

router.post('/', (req, res) => {
  const newContinent = {
    id: continents.length + 1,
    name: req.body.name
  };
  continents.push(newContinent);
  res.status(201).json(newContinent);
});

router.put('/:id', (req, res) => {
  const continent = continents.find(c => c.id === parseInt(req.params.id));
  if (continent) {
    continent.name = req.body.name || continent.name;
    res.json(continent);
  } else {
    res.status(404).send('Pais no encontrado');
  }
});

router.delete('/:id', (req, res) => {
  continents = continents.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
