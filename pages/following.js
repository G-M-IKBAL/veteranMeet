import Head from "next/head";
import Follow from "../components/follow";
function Following(){
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
        <Follow/>
        <Follow/>
        <Follow/>
        </div>
      </div>
      
    </div>

    )
}


export default Following;