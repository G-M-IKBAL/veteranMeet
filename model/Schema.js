import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    
        name : String,
        email: String,
        password:String,
        contact:String,
        active_status:String,
        stars:{type:Number,default:0},
        hobbies: {
            type: Array
        },
        organizations:{
            type:Array,
            default:[]
        },
        profession:String,
        city:String,
        followers:{type:Array},
        following:{type:Array},
        intrestedEvents:{type:Array,default:[]},
        invitations:{type:Array,default:[]},
        category:{
            type:String,
            default:"none"
        }


        

})

const Users = models.profile || model('profile', userSchema);

export default Users;