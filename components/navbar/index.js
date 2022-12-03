
import { Navbar } from "flowbite-react";
import { getSession, useSession, signOut } from "next-auth/react"
import { useRouter } from "next/router";
function MyNavbar(){

  const { data: session } = useSession()

  function handleSignOut(){
    signOut()
  }

  const router = useRouter();

  return(
    <>
    
    {
        // (router.pathname==="/" || router.pathname==="/login" || router.pathname==="/register"|| router.pathname==="/about")
        // ?LoggedOut()
        // :LoggedIn({handleSignOut})
        
        (!session)
        ?LoggedOut()
        :LoggedIn({handleSignOut})

    }
    </>

  )



}




function LoggedIn({handleSignOut}){
    return(

        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VeteranMeet
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="/home"
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="/suggestion">
            Suggestion
            </Navbar.Link>
            <Navbar.Link href="/create-event">
            Create Event
            </Navbar.Link>
            <Navbar.Link href="/invites">
            Invites
            </Navbar.Link>
            <Navbar.Link href="/followers">
            Followers
            </Navbar.Link>
            <button onClick={handleSignOut} className="bg-blue-500 text-white px-8   font-semibold border rounded" >Sign Out</button>
        </Navbar.Collapse>
        </Navbar>

    );
}




function LoggedOut(){

    return(

        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            VeteranMeet
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            
            <Navbar.Link href="/about">
            About
            </Navbar.Link>
            <Navbar.Link href="/login">
            Sign In
            </Navbar.Link>
            <Navbar.Link href="/register">
            Sign Up
            </Navbar.Link>
            
            </Navbar.Collapse>
        </Navbar>

    );
}

export default MyNavbar;

