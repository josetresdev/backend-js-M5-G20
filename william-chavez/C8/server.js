import express from 'express';
import fs from 'fs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { validateStudentData } from './middlewares/validateStudentData.js';

const app = express();
const PORT = 3002;

app.use(express.json());  

// Leer los datos del archivo json
const getStudents = () => {
    const data = fs.readFileSync('datos.json');
    return JSON.parse(data);
};

// Escribir los datos
const saveStudents = (students) => {
    fs.writeFileSync('datos.json', JSON.stringify(students, null, 2));
};

// Endpoint GET /students
app.get('/students', authMiddleware, (req, res) => {
    const students = getStudents();
    res.status(200).json(students);
});

// Endpoint GET /students/:id
app.get('/students/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    const students = getStudents();
    const student = students.find(p => p.id === id);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ error: 'No se encuentra' });
    }
});

// Endpoint DELETE /students/:id con autorización
app.delete('/students/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    let students = getStudents();
    const inicioLength = students.length;
    students = students.filter(p => p.id !== id);

    if (students.length < inicioLength) {
        saveStudents(students);
        res.status(200).json({ message: 'Estudiante eliminado correctamente' });
    } else {
        res.status(404).json({ error: 'No se encuentra' });
    }
});

// Endpoint POST /students con autorización y validación
app.post('/students', authMiddleware, validateStudentData, (req, res) => {
    const newStudent = req.body;
    let students = getStudents();
    students.push(newStudent);
    saveStudents(students);
    res.status(201).json({ message: 'Estudiante creado correctamente' });
});

// Endpoint PUT /students/:id con autorización y validación
app.put('/students/:id', authMiddleware, validateStudentData, (req, res) => {
    const id = parseInt(req.params.id);
    const updatedStudent = req.body;
    let students = getStudents();
    const studentIndex = students.findIndex(p => p.id === id);

    if (studentIndex !== -1) {
        students[studentIndex] = updatedStudent;
        saveStudents(students);
        res.status(200).json({ message: 'Estudiante actualizado correctamente' });
    } else {
        res.status(404).json({ error: 'No se encuentra' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});