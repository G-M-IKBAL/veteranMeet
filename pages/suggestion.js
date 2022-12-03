import Head from "next/head";
import EventCard from "../components/event";
function Suggestion(){
    return(

    <div >
      <Head>
        <title>Suggestion</title>
      </Head>

      <div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            Suggestions for you
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <EventCard/>
        <EventCard/>
        
        <EventCard/>
        </div>
      </div>
      
    </div>

    )
}


export default Suggestion;