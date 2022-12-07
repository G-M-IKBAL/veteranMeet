import Events from "../../../model/event"
import connectMongo from '../../../database/conn';
import Users from "../../../model/Schema";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
        // const { email,name, type,time,location,descreption,hobbies } = req.body;
        console.log(req.body);


        const all_events = await Events.find({ location: req.body.location })
        const results = []
    
        const given_location = req.body.location.toLowerCase()
    
    
        for (let i = 0; i < (all_events).length; i++) {
            //console.log(all_events[i].location.toLowerCase())
            if ((all_events[i].location).toLowerCase() === given_location) {
                console.log(all_events)
    
                results.push(all_events[i])
    
    
            }
        }

        res.status(201).json({ status : true, results: results})


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}

