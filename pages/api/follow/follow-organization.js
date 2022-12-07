import connectMongo from '../../../database/conn';
import Users from "../../../model/Schema";


export default async function handler(req, res){

    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});

        await Users.findOneAndUpdate({ email: req.body.email1 },{ $push: { organizations: req.body.email2 } })
    
        res.status(201).json({ status : true, results: req.body.email})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}













