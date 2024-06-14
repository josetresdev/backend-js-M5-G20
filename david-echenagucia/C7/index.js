const express = require('express');
const fs = require('fs');
const app = express();
const port = 3002;

app.use(express.json());

let students = require('./students.json');

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Estudiante no encontrado' });
    }
});

app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    students = students.filter(s => s.id !== studentId);

    fs.writeFile('./students.json', JSON.stringify(students, null, 2), (err) => {
        if (err) {
            res.status(500).json({ message: 'Error en la busqueda' });
        } else {
            res.json({ message: 'Estudiante borrado con exito' });
        }
    });
});
