const http = require("http");
const url = require("url");
const foodString = require("./productsOption");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    let endpoint = q.pathname;
    if (endpoint === "/profile") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`This is the page!. E.g. This is the ${req.url} page`);
      res.end();
    } else if (endpoint === "/products") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`This is the page!. E.g. This is the ${endpoint} page.`);
      console.log(q.query);
      let { search } = q.query;
      console.log(search);
      let display = foodString(search);
      if (display === search) {
        res.end(`Product "${display}" found`);
      } else {
        res.end(`Product "${search}" not found`);
      }
    } else if (endpoint === "/cart") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`This is the page!. E.g. This is the ${req.url} page`);
      res.end();
    } else if (endpoint === "/register") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`This is the page!. E.g. This is the ${req.url} page`);
      res.end();
    } else if (endpoint === "/login") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`This is the page!. E.g. This is the ${req.url} page`);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(`Page is not Found`);
      res.end();
    }
  })
  .listen(8080);
