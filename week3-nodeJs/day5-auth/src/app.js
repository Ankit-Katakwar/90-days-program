const express = require("express");
const authroutes = require("./routes/auth.routes")
const cokkieParser = require("cookie-parser");
const cookieParser = require("cookie-parser");
const postRoutes = require("./routes/post.routes")


const app = express()
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authroutes)
app.use("/api/post",postRoutes)

module.exports = app