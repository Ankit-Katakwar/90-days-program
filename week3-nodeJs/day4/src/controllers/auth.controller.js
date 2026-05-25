const userModel = require("../model/user.model")


const registerUser = (req,res)=>{
const {username,email,password} = req.body

userModel.create({
    usernaem
})





}

module.exports = {registerUser}