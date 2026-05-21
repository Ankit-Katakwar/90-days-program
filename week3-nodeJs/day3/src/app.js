const express = require("express");
const app = express();
const noteModel = require("./model/db.model");

app.use(express.json());

app.post("/notes", async (req, res) => {
  const data = req.body;

  await noteModel.create({
    title: data.title,
    description: data.description,
  });

  res.status(201).json({
    message: "Note Created Successfully.",
  });
});
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes Fetched Successfully.",
    length: notes.length,

    notes: notes,
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  await noteModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      title: title,
      description: description,
    },
  );
  res.status(200).json({ message: "Data updated successfully." });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({message:"Note deleted Successfully."})
});
module.exports = app;
