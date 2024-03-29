
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema'
import { hash } from 'bcryptjs';


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { name, email, password,contact,active_status,hobbies,profession,city } = req.body;
        console.log("account infor server = ",req.body);

        // check duplicate users
        const checkexisting = await Users.findOne({ email });
        if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

        // hash password
        Users.create({ name, email, password : await hash(password, 12),contact,active_status,hobbies,profession,city         
        }, function(err, data){
            if(err) return res.status(404).json({ err });
            res.status(201).json({ status : true, user: data})
        })


        // check duplicate users
        // const checkexistinglogin = await Logins.findOne({ email });
        // if(checkexistinglogin) return res.status(422).json({ message: "login info Already Exists...!"});

        // Logins.create({email,password},function(err,data){
        //     if(err) return res.status(404).json({ err });
        //     res.status(201).json({ status : true, login: data})
        // })


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}