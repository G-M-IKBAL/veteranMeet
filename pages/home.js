import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"
import Profile from '../components/profile'
import Post from '../components/post'

export default function Home() {

  const { data: session } = useSession()

  
  return (
    <div >
      <Head>
        <title>Home Page</title>
      </Head>
      <Profile email={session.user.email} />
      <Post email={session.user.email} />
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
