const userModel = require("../model/user.model")


const registerUser = (req,res)=>{
const {username,email,password} = req.body

const user = userModel.create({
    username,email,password
})




}