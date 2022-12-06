import Head from "next/head";
import { useEffect,useState } from "react";
import EventCard from "../components/event";

import { getSession, useSession, signOut } from "next-auth/react"
import Follow from "../components/follow";

const people = ["test@123.com","ahmad@gmail.com"];

function Suggestion(){

  const [suggestions,setSeggestions] = useState([]);

  const { data: session } = useSession();
  const [email,setEmail] =useState(session.user.email);
  const [name,setName] =useState(session.user.name);

  
 

    useEffect(()=>{
      handle1()

    },[])


    async function handle1(){

      // values.descreption = selected;
      const values = {email};

      const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify(values)
      }

      await fetch('http://localhost:3000/api/event/suggest-events', options)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setSeggestions(data.results) 
                console.log("data");
              }
              else{
                console.log("no data");
              }
              
          })
      }


    return(

    <div >
      <Head>
        <title>Suggestion</title>
      </Head>

      <div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            Suggestions for you {name}
        </h1>
        <h2 className="p-10 text-1xl font-bold leading-none sm:text-3xl">
            Events 
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            
            suggestions.map(
              (event,idx)=>(
                <EventCard key={idx} eventid={idx} email={event.email} name={event.name} descreption={event.description} type={event.type} time={event.time} location={event.location} hobbies={event.hobbies}   />
              )
            )
             
          }
        </div>

        <h2 className="p-10 text-1xl font-bold leading-none sm:text-3xl">
            People you can follow
        </h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            
            people.map(
              (email2,idx)=>(
                <Follow key={idx}  email1={email} email2={email2} />
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



export default Suggestion;



