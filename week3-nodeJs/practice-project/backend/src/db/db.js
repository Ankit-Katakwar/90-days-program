const mongoose = require("mongoose")

async function connectDb() {
    await mongoose.connect("mongodb://akk:UPhkEmle6UovVaCz@ac-7lfivur-shard-00-00.t8gogvr.mongodb.net:27017,ac-7lfivur-shard-00-01.t8gogvr.mongodb.net:27017,ac-7lfivur-shard-00-02.t8gogvr.mongodb.net:27017/?ssl=true&replicaSet=atlas-vlauf8-shard-0&authSource=admin&appName=ninetydaysprogramngodb.net/dam")
    console.log("The server is connected to the database.");
    
}

module.exports = connectDb