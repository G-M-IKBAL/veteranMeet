import Head from "next/head";
import { useEffect,useState } from "react";
import Follow from "../components/follow";

import { getSession, useSession, signOut } from "next-auth/react"
import Follower from "../components/follower";

function Followers(){

  const { data: session } = useSession();
  const [email,setEmail] =useState(session.user.email);
  const [followers,setFollowers] = useState([]);


    useEffect(()=>{

        displayFollowers()

    },[]);


    async function displayFollowers(){

    
    const values = {
      email,
    }

      console.log("follow request values to server = ",values);

      const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify(values)
      }

      await fetch('http://localhost:3000/api/follow/followers', options)
          .then(res => res.json())
          .then((data) => {
              if(data) setFollowers(data.results); 
              console.log("follow request sent");
          })



    }


    return(

    <div >
      <Head>
        <title>Followers</title>
      </Head>

      <div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            Your Followers 
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
        {
          followers.map((follower,idx)=> (
            <Follower email={follower} key={idx}/>
          ))
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


export default Followers;