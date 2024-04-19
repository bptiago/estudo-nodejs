const express = require("express");
const router = express.Router();
const Todos = require("../models/todoModel");

router.get("/", async (res) => {
  // População inicial de dados no MongoDB
  const seedData = [
    {
      username: "tiago",
      todo: "Buy chocolate",
      isDone: false,
      hasAttachment: false,
    },
    {
      username: "lucas",
      todo: "Buy water",
      isDone: false,
      hasAttachment: false,
    },
    {
      username: "zeka",
      todo: "Learn node",
      isDone: false,
      hasAttachment: false,
    },
  ];

  await Todos.insertMany(seedData);
  res.send("Seed / Initial data was added to database");
});

module.exports = router;
