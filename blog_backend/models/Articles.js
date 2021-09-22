const mongoose = require("mongoose");
const {Schema} = mongoose;

const ArticleSchema = new Schema({
    imgUrl:{
        type: String,
        required: true
    },
    heading:{
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
    description:{
        type: String,
        required: true
    },
});

module.exports=mongoose.model('article',ArticleSchema);