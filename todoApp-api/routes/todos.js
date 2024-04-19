const express = require("express");
const router = express.Router();
const Todos = require("../models/todoModel");

router.get("/", async (req, res) => {
  const result = await Todos.find({});
  res.send(result);
});

router.get("/byName/:username", async (req, res) => {
  const username = req.params.username;
  const result = await Todos.find({
    username: username,
  });
  res.send(result);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Todos.find({ _id: id });
  res.send(result);
});

router.post("/", async (req, res) => {
  // Corpo do form recebido vai ser igual ao todoModel

  // Se tem ID, é porque o TODO já estava na database
  if (req.body.id) {
    await Todos.findByIdAndUpdate(req.body.id, {
      todo: req.body.todo,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment,
    });

    res.send("Todo already existed. Now updated!");
  } else {
    // O id é gerado automaticamente
    await Todos.create({
      username: "tiago",
      todo: req.body.todo,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment,
    });
    res.send("New Todo created");
  }
});

router.delete("/delete", async (req, res) => {
  if (req.body.id) {
    const id = req.body.id;
    await Todos.findByIdAndDelete(id);
    res.send("Deleted Todo " + id);
  }

  res.send("No Todo found");
});

module.exports = router;
