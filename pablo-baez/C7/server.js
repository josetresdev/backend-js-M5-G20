const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3002;

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
app.get('/students', (req, res) => {
    const students = getStudents();
    res.status(200).json(students);
});

// Endpoint GET /students/:id
app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const students = getStudents();
    const student = students.find(p => p.id === id);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ error: 'No se encuentra' });
    }
});

// Endpoint DELETE /students/:id
app.delete('/students/:id', (req, res) => {
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

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
