const mongoose = require("mongoose");
const {Schema} = mongoose;

const ArticleSchema = new Schema({
    imgUrl1:{
        type: String,
        required: true
    },
    imgUrl2:{
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        default: Date().toString()
    },
    points:{
        type: Array
    },
    description:{
        type: Array,
        required: true
    },
});

module.exports=mongoose.model('article',ArticleSchema);