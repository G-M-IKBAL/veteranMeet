import Posts from "../../../model/post";
import connectMongo from '../../../database/conn';

export default function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { email,text} = req.body;
       
        const file = req.files.file;
        const uploadId = `${Math.random().toString(36)}${Math.random().toString(36)}`;
        const path = `./uploads/${uploadId}.${file.name.split(".")[1]}`;
        file.mv(path, (err) => {
            if (err) {
                return next(new errorHandler(400, "Error saving file", err));
            }
            Posts.create({
                email: email,
                text: text,
                multimedia: path
            })
    
            res.status(200).json({ path: uploadId });
        })
        
       


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}