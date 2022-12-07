
import connectMongo from '../../../database/conn';
import Organization_account from '../../../model/Organization/organization_account';
import { hash } from 'bcryptjs';



export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        const { name_of_org, email, password,contact,city,category } = req.body;
        console.log("org account information server = ",req.body);

        // check duplicate users
        const checkexisting = await Organization_account.findOne({ email });
        if(checkexisting) return res.status(422).json({ message: "Organization Already Exists...!"});

        // hash password
        Organization_account.create({ name_of_org, email, password : await hash(password, 12),category,contact,city         
        }, function(err, data){
            if(err) return res.status(404).json({ err });
            console.log(data);
            res.status(201).json({ status : true, organization: data})
        })


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}