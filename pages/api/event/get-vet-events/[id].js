import connectMongo from '../../../../database/conn';
import Events from "../../../../model/event";
export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))
    // only post method is accepted
    if(req.method === 'GET'){
        const {id} = req.query;
        if(!req.query) return res.status(404).json({ error: "Don't have form data...!"});
        const results = await Events.find({ email: id })          
        res.status(201).json({ status : true, results: results})
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }
}