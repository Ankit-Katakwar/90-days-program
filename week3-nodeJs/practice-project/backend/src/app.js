const express = require("express");
const multer = require("multer");
const imageUpload = require("../services/colud.service");
const postModel = require("../models/post.models");
const cors = require("cors")
const upload = multer({ storage: multer.memoryStorage() });

const app = express();
app.use(cors())

app.use(express.json());

app.post("/uploadImage", upload.single("image"), async (req, res) => {
  const file = req.file;

  const bufferData = await imageUpload(req.file.buffer);

  const data = await postModel.create({
    image: bufferData.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "The image has been uploaded successfully.",
    image:data.image,
    caption:data.caption

  });

  console.log(data);
});

app.get("/viewImages",async(req,res)=>{
    const imageData = await postModel.find()

    res.status(200).json({
        message:"All image data fetched successfully.",
        imageLength:imageData.length,
        imageData
    })
   
})

module.exports = app; 
