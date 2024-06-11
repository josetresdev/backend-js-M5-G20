const express = require('express');
const fs = require('fs');
const app = express();
const port = 3002;

app.use(express.json());

// Función para leer el archivo JSON y convertirlo a un objeto
function readStudentsFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('students.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

// Llama a la función para obtener los estudiantes
readStudentsFromFile().then(students => {
  // Ahora puedes usar el arreglo de estudiantes en tus rutas
  app.get('/students', (req, res) => {
    res.json(students);
  });

  app.get('/students/:id', (req, res) => {
    const student = students.find(i => i.id === parseInt(req.params.id));
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  });
}).catch(err => {
  console.error('Error al leer el archivo:', err);
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
