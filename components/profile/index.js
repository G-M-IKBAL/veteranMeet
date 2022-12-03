import { useEffect, useState } from "react";

function Profile({email}){

    const[name,setName]= useState("");
    const[image,setImage]= useState("");
    
    // useEffect to fetch the userInfo

    // useEffect(()=>(
    //     console.log("data")
    // )
    // ,[]
    // );



    return(

        <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="/profile.png" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-center md:text-left">About</h4>
                    <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                </div>
            </div>
        </div>

    )


}

export default Profile;