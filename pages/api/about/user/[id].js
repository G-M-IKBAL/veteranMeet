import Users from "../../../../model/Schema";
import connectMongo from "../../../../database/conn";

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'GET'){

        if(!req.query) return res.status(404).json({ error: "Don't have form data...!"});
        const { id} = req.query;
        const result = await Users.findOneAndUpdate({ email: id },{ $set: { active_status: "true" }})
        console.log("server user information",result);
        res.status(201).json({ status : true, result: result})

       
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}