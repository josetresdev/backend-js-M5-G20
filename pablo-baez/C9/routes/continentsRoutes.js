import express from 'express';
import continentsController from '../controllers/continentsController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { validateContinent } from '../middleware/validationMiddleware.js';

const router = express.Router();

// GET /continents - Obtener la lista de todos los continentes
router.get('/', authMiddleware, continentsController.getAllContinents);

// GET /continents/:id - Obtener los detalles de un continente por su ID
router.get('/:id', authMiddleware, continentsController.getContinentById);

// POST /continents - Crear un nuevo continente
router.post('/', authMiddleware, validateContinent, continentsController.createContinent);

// PUT /continents/:id - Actualizar los detalles de un continente por su ID
router.put('/:id', authMiddleware, validateContinent, continentsController.updateContinent);

// DELETE /continents/:id - Eliminar un continente por su ID
router.delete('/:id', authMiddleware, continentsController.deleteContinent);

export default router;
