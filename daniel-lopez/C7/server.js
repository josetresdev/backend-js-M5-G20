const express = require('express');
const fs = require('fs');
const app = express();
const port = 3002;

app.use(express.json());

app.get('/students', (req, res) => {
    fs.readFile('students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo' });
            return;
        }
        const students = JSON.parse(data);
        res.json(students);
    });
});

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    fs.readFile('students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo' });
            return;
        }
        const students = JSON.parse(data);
        const student = students.find(s => s.id === id);
        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    });
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    fs.readFile('students.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo' });
            return;
        }
        let students = JSON.parse(data);
        const studentIndex = students.findIndex(s => s.id === id);
        if (studentIndex !== -1) {
            students.splice(studentIndex, 1);
            fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error al escribir el archivo' });
                    return;
                }
                res.json({ message: 'Estudiante eliminado' });
            });
        } else {
            res.status(404).json({ error: 'Estudiante no encontrado' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});