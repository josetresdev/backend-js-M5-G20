const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3002;

// Leer el archivo JSON de estudiantes
const getStudents = () => {
    const data = fs.readFileSync('./students.json');
    return JSON.parse(data);
};

// Guardar el archivo JSON de estudiantes
const saveStudents = (students) => {
    fs.writeFileSync('./students.json', JSON.stringify(students, null, 2));
};

// Endpoint para obtener todos los estudiantes
app.get('/students', (req, res) => {
    const students = getStudents();
    res.json(students);
});

// Endpoint para obtener un estudiante por ID
app.get('/students/:id', (req, res) => {
    const students = getStudents();
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Endpoint para eliminar un estudiante por ID
app.delete('/students/:id', (req, res) => {
    let students = getStudents();
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));

    if (studentIndex !== -1) {
        students = students.filter(s => s.id !== parseInt(req.params.id));
        saveStudents(students);
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
