const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    multimedia: {
         
    }

})

module.exports = mongoose.model('Post', Post)