const mongoose = require("mongoose");



async function connectDb (){
 try{
     await mongoose.connect(process.env.DB_URL);
     console.log("The database has been connected.");

     
 }catch(err){
   console.log("error:",err);
   
 }
}

module.exports = connectDb