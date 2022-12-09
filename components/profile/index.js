import { useEffect, useState } from "react";

function Profile({email}){

    const[info,setInfo]= useState({});
    const[name,setName] =useState("");
    
    const[contact,setContact] =useState("");
    const[active_status,setActiveStatus] =useState("false");
    // const[hobbies,setHobbies] =useState(hobbies_arr[0]);
    const[profession,setProfession] =useState("");
    const[city,setCity] =useState("");
    
    // useEffect to fetch the userInfo

    useEffect(()=>{
        handle()
    }
    ,[]
    );


    async function handle(){

  
        await fetch(`http://localhost:3000/api/about/user/${email}`)
            .then(res => res.json())
            .then((data) => {
                if(data) {
  
                  console.log(data);
                  setInfo(data.result)
                  //setActiveStatus("true"); 
                 
                }
                else{
                  console.log("no data");
                }
                
            })
      }



    return(

        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="/profile.png" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">About</h4>
                    {
                        info===null
                        ?<div>No information</div>
                        :
                        <div>
                            <p className="dark:text-gray-400">Name:{info.name}</p>
                            <p className="dark:text-gray-400">Profession:{info.profession}</p>
                            <p className="dark:text-gray-400">City:{info.city}</p>
                            <p className="dark:text-gray-400">contact:{info.contact}</p>
                            <p className="dark:text-gray-400">active :{info.active_status}</p>
                        </div>    
                    }
                    
                    
                </div>
            </div>
        </div>

    )


}

export default Profile;