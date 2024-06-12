import express from 'express';
import authMiddleware from './middlewares/authMiddleware.mjs';
import validationMiddleware from './middlewares/validationMiddleware.mjs';

const app = express();
app.use(express.json());

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

app.post('/students', authMiddleware, validationMiddleware, (req, res) => {
    res.status(201).json({ message: 'Student created successfully' });
});

app.put('/students/:id', authMiddleware, validationMiddleware, (req, res) => {
    res.status(200).json({ message: 'Student updated successfully' });
});

app.delete('/students/:id', authMiddleware, (req, res) => {
    res.status(200).json({ message: 'Student deleted successfully' });
});

app.get('/students', (req, res) => {
    res.status(200).json({ students: [] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
