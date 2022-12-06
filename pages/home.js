import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Profile from '../components/profile'
import Post from '../components/post'
import Feed from '../components/feed'

export default function Home() {




  const { data: session } = useSession();
  const [email,setEmail] =useState(session.user.email);
  const [name,setName] =useState(session.user.name);
  const [posts,setPosts] = useState([]);


    useEffect(()=>{

        displayPosts()

    },[]);


    async function displayPosts(){
    const values = {email}

    console.log("follow request values to server = ",values);

      const options = {
          method: "POST",
          headers : { 'Content-Type': 'application/json'},
          body: JSON.stringify(values)
      }

    await fetch('http://localhost:3000/api/post/get-posts', options)
        .then(res => res.json())
        .then((data) => {
            if(data) setPosts(data.posts); 
            console.log("posts",posts);
        })

    }      

  
  return (
    <div >
      <Head>
        <title>Home Page</title>
      </Head>
      <Profile email={session.user.email} />
      <Post email={session.user.email} name={name}  />

      {/* {
        posts.map((post)=>(
            <Feed text={post.text} multimedia={post.multimedia}/>
        ))
      } */}
      <div className="p-32" >
        <h1 className="p-10 text-center text-5xl font-bold leading-none sm:text-6xl">
            Feed
        </h1>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        
        {
          posts.map((post,idx)=>(
            <Feed text={post.text} key={idx} multimedia={post.multimedia} name={name}/>
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
