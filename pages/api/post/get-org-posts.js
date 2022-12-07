import Posts from "../../../model/post";
import Users from "../../../model/Schema";
import connectMongo from "../../../database/conn";

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { email} = req.body.email;
       

        const id = await Users.findOne({ email: email })
        let posts = []
        for (let i = 0; i < id.organizations.length; i++) {
        const id2 = await Posts.find({ email: id.organizations[i] })
        posts.push(id2)
        }

        res.status(201).json({ status : true, posts: posts})

       
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}