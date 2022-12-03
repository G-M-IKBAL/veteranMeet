function EventCard({eventid,email,name,descreption,type,time,location,hobbies}){

    return(
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Email</a>
                    <span className="text-xs dark:text-gray-400">Time</span>
                    <span className="text-xs dark:text-gray-400">Type</span>
                    <span className="text-xs dark:text-gray-400">Location</span>
                </div>
            </div>
            <div>
                {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" /> */}
                <h2 className="mb-1 text-xl font-semibold">Name</h2>
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Hobbies</a>
                <p className="text-sm dark:text-gray-400">description</p>
            </div>
            
        </div>
    )


}



export default EventCard;