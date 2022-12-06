import Head from "next/head";
import FollowingCard from "../components/following";

import { getSession, useSession, signOut } from "next-auth/react"
import { useState,useEffect } from "react";
function Following(){

  const { data: session } = useSession();
  const [email,setEmail] =useState(session.user.email);
  const [following,setFollowing] = useState([]);


    useEffect(()=>{

        displayFollowing()

    },[]);


    async function displayFollowing(){

    
    const values = {
      email,
    }

      console.log("follow request values to server = ",values);

      const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify(values)
      }

      await fetch('http://localhost:3000/api/follow/following', options)
          .then(res => res.json())
          .then((data) => {
              if(data) setFollowing(data.results); 
              console.log("follow ");
          })



    }




    return(

    <div >
      <Head>
        <title>Following</title>
      </Head>

      <div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            People you follow
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          following.map((following,idx)=> (
            <FollowingCard email={following} key={idx}/>
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


export default Following;