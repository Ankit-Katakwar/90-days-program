const mongoose = require("mongoose");

async function connectDB (req,res){

   try{
     await mongoose.connect(process.env.DB_URL)
     console.log("Connected to database.");
     
}catch(err){
    console.log("Error:",err)
}
   }

   module.exports = connectDB