// Servidor e API utilizando express

const express = require("express");
app = express();

const port = process.env.PORT || 3000;

// HTTP GET method
app.get("/", (req, res) => {
  res.send("<html><body><h1>Hello World</h1></body><html>");
});

// Passado variáveis pelo URL
app.get("/post/:id", (req, res) => {
  const id = req.params.id;
  res.send("<html><body><h1>Hello World. Id = " + id + "</h1></body><html>");
});

app.listen(port); // Invoca um servidor numa porta específica.
