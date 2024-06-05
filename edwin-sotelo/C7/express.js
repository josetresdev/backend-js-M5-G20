const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(i => i.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Este ID no lo tiene asignado ningun estudiante');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});