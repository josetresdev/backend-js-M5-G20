import express from 'express';
import {
    getContinents,
    getContinentById,
    createContinent,
    updateContinent,
    deleteContinent
} from '../controllers/continentsController.mjs';
import authMiddleware from '../middlewares/authMiddleware.mjs';
import validationMiddleware from '../middlewares/validationMiddleware.mjs';

const router = express.Router();

router.get('/', getContinents);
router.get('/:id', getContinentById);
router.post('/', authMiddleware, validationMiddleware, createContinent);
router.put('/:id', authMiddleware, validationMiddleware, updateContinent);
router.delete('/:id', authMiddleware, deleteContinent);

export default router;
