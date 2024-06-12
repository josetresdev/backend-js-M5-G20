const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];


app.get('/students', (req, res) => {
  res.send(students);
});


app.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).send(student);
});


app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const newStudent = req.body;
  students = students.map(student => item.id == id ? newStudent : item);
  res.send(newStudent);
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  students = students.filter(student => student.id != id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});