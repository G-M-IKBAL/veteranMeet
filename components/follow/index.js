import { useRouter } from "next/router";

function Follow({email1,email2}){

    const router = useRouter();

    

    async function handleFollow(e){
        alert("followed")
        console.log("followed sent to ", email2);

        e.preventDefault();

		const values = {
			email1,email2
		}

        console.log("follow request values to server = ",values);

        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/follow/follow-person', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000/suggestion')
				console.log("follow request sent");
            })



    }
    return(
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{email2}</a>
                    {/* <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a> */}
                    <button className="text-white p-2 bg-blue-500 hover:bg-blue-600 text-md" onClick={handleFollow}>Follow</button>
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
  
  

export default Follow;