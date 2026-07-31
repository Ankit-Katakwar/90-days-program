const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password:{required: true , type: String},
});

const userModel =  mongoose.model("users",userSchema)

module.exports = userModel;