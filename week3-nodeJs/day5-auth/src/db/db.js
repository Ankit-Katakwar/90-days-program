const mongoose = require("mongoose");

async function connectDB (req,res){

   try{
     await mongoose.connect(process.env.DB_URL)
     console.log("Connected to DB.");
     
}catch(err){
    console.log("Error occured :",err)
}
   }

   module.exports = connectDB