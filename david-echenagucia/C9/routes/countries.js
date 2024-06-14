const express = require('express');
const router = express.Router();

let countries = []; // Datos en memoria

// Obtener todos los países
router.get('/', (req, res) => {
  res.json(countries);
});

// Obtener un país por ID
router.get('/:id', (req, res) => {
  const country = countries.find(c => c.id === parseInt(req.params.id));
  if (country) {
    res.json(country);
  } else {
    res.status(404).send('Pais no encontrado');
  }
});

// Crear un nuevo país
router.post('/', (req, res) => {
  const newCountry = {
    id: countries.length + 1,
    name: req.body.name,
    continent: req.body.continent
  };
  countries.push(newCountry);
  res.status(201).json(newCountry);
});

router.put('/:id', (req, res) => {
  const country = countries.find(c => c.id === parseInt(req.params.id));
  if (country) {
    country.name = req.body.name || country.name;
    country.continent = req.body.continent || country.continent;
    res.json(country);
  } else {
    res.status(404).send('Pais no encontrado');
  }
});

router.delete('/:id', (req, res) => {
  countries = countries.filter(c => c.id !== parseInt(req.params.id));
  res.status(204).send();
});

module.exports = router;
