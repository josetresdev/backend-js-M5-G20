// Importa tu módulo de datos de continentes simulados
import continentsData from '../data/continentsData.js';

// Función para obtener todos los continentes
const getAllContinents = (req, res) => {
    try {
        res.status(200).json(continentsData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Función para obtener un continente por su ID
const getContinentById = (req, res) => {
  const id = req.params.id;
  // console.log('Searching for continent with ID:', id);
  // console.log('Continents data:', continentsData);

  const continent = continentsData.find(cont => cont.id === parseInt(id)); // Asegúrate de convertir id a entero

  if (continent) {
      res.status(200).json(continent);
  } else {
      // console.log('Continent not found with ID:', id);
      res.status(404).json({ message: `Continent with ID ${id} not found` });
  }
};

// Función para crear un nuevo continente
const createContinent = (req, res) => {
    const newContinent = req.body;

    // Simulación de generación de ID (puedes implementar tu lógica real aquí)
    newContinent.id = Date.now().toString();

    continentsData.push(newContinent);
    res.status(201).json(newContinent);
};

// Función para actualizar un continente por su ID
const updateContinent = (req, res) => {
    const id = req.params.id;
    const updatedContinent = req.body;
    let index = continentsData.findIndex(cont => cont.id === id);

    if (index !== -1) {
        // Actualiza los datos del continente encontrado
        continentsData[index] = { ...continentsData[index], ...updatedContinent };
        res.status(200).json(continentsData[index]);
    } else {
        res.status(404).json({ message: `Continent with ID ${id} not found` });
    }
};

// Función para eliminar un continente por su ID
const deleteContinent = (req, res) => {
    const id = req.params.id;
    const index = continentsData.findIndex(cont => cont.id === id);

    if (index !== -1) {
        continentsData.splice(index, 1);
        res.status(200).json({ message: `Continent with ID ${id} deleted successfully` });
    } else {
        res.status(404).json({ message: `Continent with ID ${id} not found` });
    }
};

export default {
    getAllContinents,
    getContinentById,
    createContinent,
    updateContinent,
    deleteContinent
};
