const http = require("http");
const port = 3002;

const products = JSON.stringify([
  { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
  { id: 2, name: "Chair", price: 49.99, category: "Furniture" },
  { id: 3, name: "Pen", price: 1.99, category: "Stationery" },
]);


const server = http.createServer((req, res) => {
  const id = parseInt(req.url.split("/")[2], 10);
  
  switch (req.url) {
    case "/products":
      res.writeHead(200);
      res.end(products);
      break;
    case "/":
      res.writeHead(200);
      res.end(products);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(port, () => {
  console.log(`Servidor  arriba en el puerto ${port}`);
});
