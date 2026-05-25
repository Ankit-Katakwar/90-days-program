const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const routes = express.Router()




routes.post("/posts", async (req,res)=>{

    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorised. "
        })

     

    }
    try{
      const decoded =  jwt.verify(token ,process.env.JSON_WEBTOKEN_KEY)

      const user = await userModel.findOne({
        _id:decoded.id
      })

      console.log(user)
      

    }catch(err){res.status(401).json({
        message:"the token is invalid."
    })}


    res.json({
        message:"post created."
        
    
    })
})
module.exports = routes
