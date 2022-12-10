// const mongoose = require("mongoose");
import { Schema, model, models } from 'mongoose';

const eventSchema = new Schema({
    eventid:{
        type:String
       // required:true
    },
    email: {
        type: String
       // required: true
    },
    name: {
        type: String
       // required: true
    },
    descreption:{
        type: String
    },
    type: {
        type: String
        //required: true
    },
    time: {
        type: String
        //required: true
    },
    // stars: {
    //     type: Number,
    //     max: 5000
    // },
    location: {
        type: String
       // required: true
    },
    hobbies: {
        type: Array
    },
    inviteSent:{
        type: Boolean
    }

})

const Events = models.event || model('event', eventSchema);

export default Events;