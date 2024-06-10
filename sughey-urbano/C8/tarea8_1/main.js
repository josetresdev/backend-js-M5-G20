// Importa los módulos necesarios
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

// Base de datos de estudiantes
const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

// Endpoint para obtener todos los estudiantes
app.get('/students', (req, res) => {
    res.json(students);
});

// Endpoint para obtener un estudiante por ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
