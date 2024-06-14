
const http = require("http");
const app = express();
const port = 3002;

const students = [
  { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
  { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];


const server = http.createServer((req, res) => {
  const id = parseInt(req.url.split("/")[2], 10);
  
  switch (req.url) {
    case "/students":
      res.writeHead(200);
      res.end(students);
      break;
    case "/":
      res.writeHead(200);
      res.end(students);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(port, () => {
  console.log(`Servidor  arriba en el puerto ${port}`);
});


