import express from 'express';
import {
    getCountries,
    getCountryById,
    createCountry,
    updateCountry,
    deleteCountry
} from '../controllers/countriesController.mjs';
import authMiddleware from '../middlewares/authMiddleware.mjs';
import validationMiddleware from '../middlewares/validationMiddleware.mjs';

const router = express.Router();

router.get('/', getCountries);
router.get('/:id', getCountryById);
router.post('/', authMiddleware, validationMiddleware, createCountry);
router.put('/:id', authMiddleware, validationMiddleware, updateCountry);
router.delete('/:id', authMiddleware, deleteCountry);

export default router;
