import Posts from "../../../model/post";
import connectMongo from '../../../database/conn';
import formidable from "formidable";
import mv from "mv";

export const config = {
    api: {
       bodyParser: false,
    }
};


export default function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    const form =formidable()
    form.parse(req,(err,fields,files)=> {
        if (err) console.log(err);

        if(req.method === "POST")
        {
        
            if(!fields) return res.status(404).json({ error: "Don't have form data...!"});
            else if(fields.multimedia==="undefined") {

                console.log(true)
                const { email,text} = fields;
        

                Posts.create({
                    email: email,
                    text: text,
                    multimedia: ""
                }, function(err, data){
                    if(err) return res.status(404).json({ err });
                    res.status(201).json({ status : true, post: data})
                })

            }
            else{
                const { email,text} = fields;
                // console.log(fields, files)
                console.log("files.multi = ",files)

                const uploadId = `${Math.random().toString(36)}${Math.random().toString(36)}`;

                var oldPath = files.multimedia.filepath;
                var newPath = `./public/uploads/${uploadId}.${files.multimedia.originalFilename.split(".")[1]}`;
                var savePath = `uploads/${uploadId}.${files.multimedia.originalFilename.split(".")[1]}`;
                mv(oldPath, newPath,{mkdirp: true}, function(err) {
                    if(err){
                        return (res.status(400).json({ message: "ERROR saving file"}));
                    }
                    else{

                        Posts.create({
                            email: email,
                            text: text,
                            multimedia: savePath
                        })

                    }
                });


                res.status(200).json({ fields, files,uploadId })
                

            }

        }
        else{
            res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
        }    
        


    })

    

}