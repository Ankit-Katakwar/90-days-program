const express = require("express");
const authController = require("../controller/auth.controller");
const userModel = require("../model/user.model");
const routes = express.Router()



routes.post("/registration",authController.registerUser)





module.exports = routes