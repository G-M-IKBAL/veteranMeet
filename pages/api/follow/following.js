import connectMongo from '../../../database/conn';
import Users from "../../../model/Schema";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have email ...!"});

        const id = await Users.findOne({email: req.body.email})

        res.status(201).json({ status : true, results: id.following})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}













