import express from 'express';
import authMiddleware from './middlewares/authMiddleware.js';
import validationMiddleware from './middlewares/validationMiddleware.js';

const app = express();
app.use(express.json());
app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
    res.status(201).json({ message: 'Student created' });
});

app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
    res.status(200).json({ message: 'Student updated' });
});
app.delete('/students/:id', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Student deleted' });
});
app.get('/students', (req, res) => {
    res.status(200).json({ message: 'Students retrieved' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


