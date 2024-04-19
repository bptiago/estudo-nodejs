const express = require("express");
const app = express();
const connectToDatabase = require("./utils/dbConn.js");

const port = process.env.PORT || 3000;

// Middleware para fazer o JSON parse
app.use(express.json());

const seedRouter = require("./routes/seedData.js");
app.use("/seedData", seedRouter);

const todosRouter = require("./routes/todos.js");
app.use("/todos", todosRouter);

app.listen(port, () => {
  console.log("Server live, open on port " + port);
  connectToDatabase();
});
