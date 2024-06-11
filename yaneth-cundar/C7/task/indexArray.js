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
    if (students) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
  