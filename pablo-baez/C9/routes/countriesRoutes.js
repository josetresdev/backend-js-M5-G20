import express from 'express';
import countriesController from '../controllers/countriesController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { validateCountry } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, countriesController.getAllCountries);
// Implementa el resto de las rutas aquí

export default router;
