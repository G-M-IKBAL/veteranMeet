const mongoose = require("mongoose");

const Organization_account= new mongoose.Schema({

    email:{type:String,require:true},
    password:{type:String,require:true},
    name_of_org:{type:String,require:true},
    category:{type:String,require:true},
    contact:{type:String,require:true},
    country:{type:String,require:true},
    city:{type:String,require:true}


})

module.exports=mongoose.model('Organization_account',Organization_account)