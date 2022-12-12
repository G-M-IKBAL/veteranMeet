import Posts from "../../../../model/post";
import Users from "../../../../model/Schema";
import connectMongo from "../../../../database/conn";

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'GET'){



        if(!req.query) return res.status(404).json({ error: "Don't have form data...!"});
        const { id} = req.query;
       
        console.log("email = ",id);
        const user = await Users.findOne({ email: id })
        console.log("printing user = ",user)
        let posts = []
        for (let i = 0; i < user.organizations.length; i++) {
        const id2 = await Posts.find({ email: user.organizations[i] })
        console.log("server side post", id2);
        posts.push(id2)
        }

        res.status(201).json({ status : true, posts: posts})

       
    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}