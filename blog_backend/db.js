const mongoose = require("mongoose");
const url=require("./mongoUrl");

const connectToMongo=()=>{
    mongoose.connect(url).then(()=>{
        console.log("Connected to mongodb atlas");
    })
    .catch((err)=>{
        console.log("Database Down....");
        console.log(err);
    })
}

module.exports=connectToMongo;