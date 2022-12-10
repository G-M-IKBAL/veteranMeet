import connectMongo from '../../../database/conn';

import Users from "../../../model/Schema";
import Organization_events from "../../../model/Organization/Organization_Event";
import Events from '../../../model/event';

export default async function handler(req, res){
    connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

    // only post method is accepted
    if(req.method === 'POST'){

        if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});

        
        const accCheck = req.body.email.split("@");

        if(accCheck[1]==="org.com")
        {
            await Organization_events.findOneAndUpdate({ eventid: req.body.eventid }, { inviteSent: true })
            const all_org_profiles = await Users.find()  //vetrens org_profile
            const org_event = await Organization_events.findOne({ eventid: req.body.eventid })   //organization org_profile
            // const org_event = await org_profile_DB.findOne({ email: req.body.email })   //organization org_profile

            const results = [];

            console.log(all_org_profiles)

            for (let i = 0; i < (all_org_profiles).length; i++) {
            let Flag = false;

            for (let j = 0; j < (org_event.hobbies).length; j++) {
            for (let k = 0; k < (all_org_profiles[i].hobbies).length; k++) {
                if (Flag === false) {
                    if (org_event.hobbies[j].name === all_org_profiles[i].hobbies[k].name) {
                        
                        const invitation_profile = await Users.findOneAndUpdate({ email: all_org_profiles[i].email },{ $push: { invitations: req.body.eventid }})
                        //console.log("matched");
                        results.push(all_org_profiles[i])
                        Flag = true
                        break;

                    }

                }
            }
            }
            }

            res.status(201).json({ status : true, results: results})

    
            
        }
        else{

            await Events.findOneAndUpdate({ eventid: req.body.eventid }, { inviteSent: true })

            const vet_profile = await Users.findOne({ email: req.body.email })   //veteran profile
            let followers = vet_profile.followers
            console.log("vet followers = ",followers)
            // const all_org_profiles = await DB.find()  //vetrens org_profile
            const results = [];
            for (let i = 0; i < followers.length; i++) {

            const invitation_profile = await Users.findOneAndUpdate({ email: followers[i] },{ $push: { invitations: req.body.eventid } })


            console.log(invitation_profile)

            }

            res.status(201).json({ status : true, results: true})

        }
        
        


    } else{
        res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
    }

}
