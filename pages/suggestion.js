import Head from "next/head";
import { useEffect,useState } from "react";
import EventCard from "../components/event";

import { getSession, useSession, signOut } from "next-auth/react"
import Follow from "../components/follow";
import SearchBar from "../components/search";

// const people = ["test@123.com","ahmad@gmail.com"];

function Suggestion(){

  const [suggestions,setSeggestions] = useState([]);

  const [searches,setSearches] = useState([]);
  const { data: session } = useSession();
  const [email,setEmail] =useState(session.user.email);
  const [name,setName] =useState(session.user.name);


  const [location,setLocation] =useState("");

  const [people,setPeople] =useState([]);
  
  
    // for searching event on location
    useEffect(()=>{
      
      handle1()

    },[location])

    
    useEffect(()=>{

      // for suggesting events based on hobbies
      handle2()
       //for suggesting users to follow them
      handle3()

    },[])



    async function handle1(){

      // values.descreption = selected;
      const values = {location};

      const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify(values)
      }

      await fetch('http://localhost:3000/api/event/suggest-location', options)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setSearches(data.results) 
                console.log("data");
              }
              else{
                console.log("no data");
              }
              
          })
    }


      





    async function handle2(){

      // values.descreption = selected;

      await fetch(`http://localhost:3000/api/about/user/${email}`)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setSeggestions(data.results) 
                console.log("data",suggestions);
              }
              else{
                console.log("no data");
              }
              
          })
    }


    ///to follow people


    async function handle3(){

      // values.descreption = selected;
      const values = {email};

      // const options = {
      //     method: "GET",
      //     headers : { 'Content-Type': 'application/json'},
      //     // body: JSON.stringify(values)
      // }

      await fetch(`http://localhost:3000/api/follow/follow-results/${email}`)
          .then(res => res.json())
          .then((data) => {
              if(data) {

                console.log(data);
                setPeople(data.results) 
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
            Events based on location
        </h2>
        <div className="p-10">
          <SearchBar location={location} setLocation={setLocation} />
        </div>
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            
            searches.map(
              (event,idx)=>(
                <EventCard key={idx} eventid={idx} email={event.email} name={event.name} descreption={event.description} type={event.type} time={event.time} location={event.location} hobbies={event.hobbies}   />
              )
            )
             
          }
        </div>
        
        <h2 className="p-10 text-1xl font-bold leading-none sm:text-3xl">
            Events based on hobbies
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {
            suggestions.length === 0?
            <div className="p-6 pl-16 space-y-6 overflow-hidden rounded-lg">Could not found any suggestions for you</div>
            :
            suggestions.map(
              (event,idx)=>(
                <EventCard key={idx} eventid={idx} email={event.email} name={event.name} descreption={event.descreption} type={event.type} time={event.time} location={event.location} hobbies={event.hobbies}   />
              )
            )
             
          }
        </div>

        <h2 className="p-10 text-1xl font-bold leading-none sm:text-3xl">
          People with similar interests
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



