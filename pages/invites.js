import { useSession,getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import InviteCard from "../components/invite";
function Invites(){

    const [events,setEvents] = useState([]);
    const { data: session } = useSession();
    const [email,setEmail] =useState(session.user.email);

    useEffect(()=>{
        eventsHandle()
    },[])



    async function eventsHandle(){

      // values.descreption = selected;
      

      const accCheck = email.split("@");

      if(accCheck[1]==="org.com")
      {
        //for org events
        await fetch(`http://localhost:3000/api/event/get-org-events/${email}`)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setEvents(data.results) 
                console.log("data is here = ",events);
              }
              else{
                console.log("no data");
              }
              
          })

      }
      else{
        //for user events
        await fetch(`http://localhost:3000/api/event/get-vet-events/${email}`)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setEvents(data.results) 
                console.log("data is here = ",events);
              }
              else{
                console.log("no data");
              }
              
          })


      }

      
    }

    return(

    <div >
      <Head>
        <title>Invites</title>
      </Head>

      <div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            Send invitations
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          {
            events.length === 0?
            <div className="p-6 pl-16 space-y-6 overflow-hidden rounded-lg">Go create event to invite people</div>
            :
            events.map(
              (event,idx)=>(
                <InviteCard key={idx} eventid={event.eventid} email={event.email} name={event.name} descreption={event.descreption} type={event.type} time={event.time} location={event.location} hobbies={event.hobbies}   />
              )
            )
             
          }  

          
        </div>
      </div>
      
    </div>

    )
}



export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}



export default Invites;