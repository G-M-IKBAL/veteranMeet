import { Schema, model, models } from 'mongoose';

const organizationEventSchema = new Schema({
    eventid: {
        type: String
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
    descreption: {
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
    stars: {
        type: Number,
        max: 5000
    },
    location: {
        type: String
        // required: true
    },
    hobbies: {
        type: Array
    }

})


const Organization_Event = model('Organization_Events', organizationEventSchema);

export default Organization_Event;