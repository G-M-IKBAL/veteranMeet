import Organization_accounts from "../../../../model/Organization/organization_account";
import connectMongo from "../../../../database/conn";

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'GET'){

        if(!req.query) return res.status(404).json({ error: "Don't have form data...!"});
        const { id} = req.query;
        const result = await Organization_accounts.findOne({ email: id })
        console.log("server organization information",result);
        res.status(201).json({ status : true, result: result})

       
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}