const { default: mongoose } = require("mongoose");

// Username e password foram removidos para subir o código com segurança no GitHub.
const uri =
  "mongodb+srv://<username>:<password>@cluster0.ako6vgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function connectToDatabase() {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Connection failed"));
}

module.exports = connectToDatabase;
