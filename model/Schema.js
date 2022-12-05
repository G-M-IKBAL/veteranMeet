import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    
        name : String,
        email: String,
        password:String,
        contact:String,
        active_status:String,
        hobbies:String,
        profession:String,
        city:String,
        followers:{type:Array},
        following:{type:Array},
        starts:{},
        intrestedEvents:{}    

})

const Users = models.profile || model('profile', userSchema);

export default Users;