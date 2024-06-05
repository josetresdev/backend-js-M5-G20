const express = require('express');
const app = express();
const port = 3002;

let students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

// Endpoint para obtener la lista de todos los estudiantes
app.get('/students', (req, res) => {
    res.json(students);
});

// Endpoint para obtener los detalles de un estudiante específico basado en el ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: 'Estudiante no encontrado' });
    }
});

// Endpoint para eliminar un estudiante específico basado en el ID
app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === studentId);
    
    if (index !== -1) {
        students = students.filter(s => s.id !== studentId);
        res.json({ message: 'Estudiante eliminado correctamente' });
    } else {
        res.status(404).json({ error: 'Estudiante no encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
