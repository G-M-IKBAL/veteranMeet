import Events from "../../../model/event"
import connectMongo from '../../../database/conn';
import Users from "../../../model/Schema";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        // const { email,name, type,time,location,descreption,hobbies } = req.body;
        
        
        // console.log(req.body);

        // check duplicate users
        
        
        //  if(err) return res.status(404).json({ err });
        //     res.status(201).json({ status : true, user: data})

        //DB event
        //profile_DB users

        const all_events= await Events.find()
        const profile= await Users.find({email:req.body.email})
        const results=[];
        for(let i=0;i<(all_events).length;i++)
        {
            
            for(let j=0;j<(profile[0].hobbies).length;j++)
            {
            
                for(let k=0;k<(all_events[i].hobbies).length;k++)
                {
                    //console.log(all_events[i].hobbies[k]);
                    //console.log(profile[j].hobbies[j]);
                    
                    // console.log(i)

                    if(profile[j].hobbies[j] === all_events[i].hobbies[k])
                    {
                    
                        console.log("matched");
                    
                        results.push(all_events[i])
                        console.log("results in server",results);
                        break;

                    }

                }
            }
        }

        // res.send(results)

        res.status(201).json({ status : true, results: results})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}

