const http = require('http');
const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

const server = http.createServer((req, res) => {
   
    if (req.url === '/students' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'aplication/json'});
        res.end(JSON.stringify(students));

    
    }
    console.log(students)
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor arriba, Yaneth ${PORT}`);
});
