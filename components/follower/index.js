function Follower({email}){

        return(
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{email}</a>
                    {/* <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a> */}
                    {/* <button className="text-white bg-blue-500 text-xl" onClick={handleFollow}>Follow</button> */}
                </div>
            </div>
        </div>
    )
}




export default Follower;