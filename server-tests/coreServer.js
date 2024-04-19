// Servidor utilizando módulos core do node

const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // Criação de rota localhost:1337/api
    if (req.url === "/api") {
      fs.createReadStream(__dirname + "/index.htm").pipe(res); // Método utilizado streams
    }

    // Rota root
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let html = fs.readFileSync(__dirname + "/index.htm", "utf-8"); // Método utilizado buffers
      const message = "Hello guys!!";
      html = html.replace("{receivedMessage}", message);
      res.end(html);
    }
  })
  .listen(1337, "127.0.0.1");

// O listener de requisição está ouvindo a porta 1337 do localhost
// Toda vez que uma requisição for feita nessa porta, o servidor irá executar a função do listener.
