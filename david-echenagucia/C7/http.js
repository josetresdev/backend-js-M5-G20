const http = require("http");
const url = require("url");

const parseJSON = (req, callback) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    callback(JSON.parse(body));
  });
};

let items = [
  { id: 1, name: "Item 1", description: "Descripción de elemento" },
  { id: 2, name: "Item 2", description: "Descripción de elemento" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  if (path === "/items" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items));
  } else if (path.match(/\/items\/\d+/) && method === "GET") {
    const id = parseInt(Path.slit("/")[2]);
    const item = items.find((i) => i.id === id);
    if (item) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end("Item not found");
    }
  } else if (path === "/items" && method === "POST") {
    parseJSON(req, (newItem) => {
      newItem.id = items.length + 1;
      items.push(newItem);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newItem));
    });
  } else if (path.match(/\/items\/\d+/) && method === "PUT") {
    const id = parseInt(path.split("/")[2]);
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
      parseJSON(req, (updatedItem) => {
        items[index] = { id, ...updatedItem };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items[index]));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Item not found");
    }
  } else if (path.match(/\/items\/\d+/) && method === "PATCH") {
    const id = parseInt(path.split("/")[2]);
    const index = items.findIndex((i) => i.id === id);
    if (index !== -1) {
      parseJSON(req, (partialUpdate) => {
        items[index] = { ...items[index], ...partialUpdate };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(items[index]));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Item not found");
    }
  } else if (path.match(/\/items\/\d+/) && method === "DELETE") {
    const id = parseInt(path.split("/")[2]);
    items = items.filter((i) => i.id !== id);
    res.writeHead(204, { "Content-Type": "text/plain" });
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor  arriba en el puerto ${port}`);
});
