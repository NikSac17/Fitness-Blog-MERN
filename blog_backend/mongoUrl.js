const dotenv = require("dotenv");
dotenv.config()

const url=`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lqrtj.mongodb.net/fitnessBlogData?retryWrites=true&w=majority`;


module.exports=url;