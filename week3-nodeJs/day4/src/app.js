const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./model/user.model")


const app = express();
app.use(express.json())
app.use(cookieParser())





module.exports = app 