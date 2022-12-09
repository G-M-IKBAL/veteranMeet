import connectMongo from '../../../database/conn';
import Users from "../../../model/Schema";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});

        const id = await Users.findOne({email: req.body.email1})
        const id2 =await Users.findOne({email: req.body.email2}) 

        
        id.following.push(req.body.email2)
        id.save()

        id2.followers.push(req.body.email2)
        id2.save()

        res.status(201).json({ status : true, results: id})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}













