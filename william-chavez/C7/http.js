const http = require('http');
const url = require('url');

const parseJSON = (req, callback) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        callback(JSON.parse(body));
    })
}

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
]

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    if (path === '/students' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(students));


}   else if (path.match(/\/students\/\d+/) && method === 'GET') {
    const id = parseInt(path.split('/')[2]);
    const item = students.find(i => i.id === id);
    if (item) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Este ID de producto no existe');
    }
  }
});
  const port = 3000;
  server.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});