function InviteCard({eventid,email,name,descreption,type,time,location,hobbies}){

    async function handleClick(event){
        
        event.preventDefault();
        alert("invitation sent");

        const values = {email,eventid};

        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }


        await fetch('http://localhost:3000/api/event/event-invite', options)
          .then(res => res.json())
          .then((data) => {
              if(data) {
                console.log("invites sent to ",data.results); 
              }
              else{
                console.log("no data");
              }
              
          })




    }

    return(
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex space-x-4">
                <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Email:{email}</a>
                    <span className="text-xs dark:text-gray-400">Time:{time}</span>
                    <span className="text-xs dark:text-gray-400">Type:{type}</span>
                    <span className="text-xs dark:text-gray-400">Location:{location}</span>
                </div>
            </div>
            <div>
                {/* <img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" /> */}
                <h2 className="mb-1 text-xl font-semibold">Name:{name}</h2>
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Hobbies:{}</a>
                <p className="text-sm dark:text-gray-400">description:{descreption}</p>
            </div>
            <button className="bg-blue-500 text-white hover:bg-blue-600 p-2" onClick={handleClick}>Send invite</button>
        </div>
    )


}



export default InviteCard;