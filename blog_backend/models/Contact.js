const mongoose = require("mongoose");
const {Schema} = mongoose;

const ContactSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    profession:{
        type: String
    },
    doubt:{
        type: String
    },
    feedback:{
        type: String
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
});

module.exports=mongoose.model('contact',ContactSchema);