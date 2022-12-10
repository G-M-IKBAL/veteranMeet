// const DB = require('../Schema/event')
// const profile_DB=require('../Schema/profile')

import Events from "../../../model/event"
import connectMongo from '../../../database/conn';

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { email,name, type,time,location,descreption,hobbies } = req.body;
        console.log(req.body);

        // check duplicate users
        const checkexisting = await Events.findOne({ name });
        if(checkexisting) return res.status(422).json({ message: "Event Already Exists...!"});

        var max = 10000
        var num = Math.floor(Math.random() * max)
        
        Events.create({ eventid:num, email,name, type,time,location,descreption,hobbies,inviteSent:false }, function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, event: data})
        })


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}