import Posts from "../../../model/post";
import connectMongo from '../../../database/conn';

export default function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { email,text, multimedia} = req.body;
       

        Posts.create({
            email: email,
            text: text,
            multimedia: multimedia
        }, function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, post: data})
        })
        
       


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}