import connectMongo from '../../../../database/conn';
import Users from "../../../../model/Schema";


export default async function handler(req, res){

    const { id } = req.query

    console.log("email to server= ",id);

    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'GET'){

        if(!req.query) return res.status(404).json({ error: "Don't have email ...!"});

       
        const all_profiles=await Users.find()
        const profile= await Users.findOne({email:id})
        const results=[];
        
        
        for(let i=0;i<(all_profiles).length;i++)
        {
            if( (all_profiles[i].email != id) && (id != all_profiles[i].followers))
            {
        
                let Flag=false
                for(let j=0;j<(profile.hobbies).length;j++)
                {
            
                    for(let k=0;k<(all_profiles[i].hobbies).length;k++)
                    {
            
                    if(Flag===false)
                    {
                        
                
                        if(profile.hobbies[j].name === all_profiles[i].hobbies[k].name) // this line was changefrom profile[j] to zero
                        {
                        
                            console.log("matched");
                            results.push(all_profiles[i].email)
                            
                            Flag=true
                            break;
            
                        }
            
                    }

                    }
            
                }

            }
        
        }
    
        
        console.log("follow-results = ",results);

        res.status(201).json({ status : true, results: results})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}
