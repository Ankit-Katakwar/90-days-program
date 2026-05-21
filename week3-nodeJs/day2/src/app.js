const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res
    .status(200)
    .json({ message: "Notes added in the list successfully", status: "200" });
});


app.get("/notes",(req,res)=>{
    res.send({
        Message:"Notes fetched successfully.",
        Notes:notes
    })
})

app.delete("/notes/:index" , (req,res)=>{
    const idx = req.params.index

    delete notes[idx]

    res.status(200).json({
        message:"Notes deleted successfully."
    })
})

app.patch("/notes/:index", (req,res)=>{
    const idx = req.params.index
    const desc = req.body.desc
    const title = req.body.title

     notes[idx].desc = desc
     notes[idx].title = title 

     res.status(200).json({
        Message:"Notes updated Successfully.",
        notes:notes[idx]  
     })
})

module.exports = app;
