const mongoose = require("mongoose");

login = new mongoose.Schema({
    email:{
        type: String,
        required: true
      
    },
    password:{}

})

module.exports=mongoose.model('login',login)
