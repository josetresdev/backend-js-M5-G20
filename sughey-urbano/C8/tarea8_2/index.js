import express from 'express';
import { validationMiddleware } from './middlewares/validationMiddleware.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta para crear estudiantes
app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
    const { name, age, major } = req.body;
    // Implementa la lógica de tu endpoint
    res.status(201).json({ message: 'Student created successfully', student: { name, age, major } });
});

// Ruta para actualizar estudiantes
app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
    const { id } = req.params;
    const { name, age, major } = req.body;
    // Implementa la lógica de tu endpoint
    res.status(200).json({ message: 'Student updated successfully', student: { id, name, age, major } });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
