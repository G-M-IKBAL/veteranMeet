import { useState } from "react";
import ListBox from "../components/listbox";
import Head from "next/head";
import { useRouter } from 'next/router';


const hobbies_arr = [
	{ name: 'football' },
	{ name: 'cricket' },
	{ name: 'hockey' },
	{ name: 'movies' },
]


function CreateEvent(){

    const[name,setName] =useState("");
    const[email,setEmail] =useState("");
    const[type,setType] =useState("");
    const[time,setTime] =useState("");
    const[location,setLocation] =useState("");
    const[descreption,setDescription] =useState("");
	const [stars,setStars] =useState("");
	const[hobbies,setHobbies] =useState(hobbies_arr[0]);
	
	
	

	const router = useRouter()
    


	async function handleSubmit(event){

		// values.descreption = selected;
		
		event.preventDefault();
		alert("Event Created")
		
		const values = {
			email,name, type,time,location,stars,descreption,hobbies
		}

        console.log("event values server = ",values);

		const accCheck = email.split("@");

		if(accCheck[1]!=="org.com")
		{
			console.log("event values server = ",values);

			const options = {
				method: "POST",
				headers : { 'Content-Type': 'application/json'},
				body: JSON.stringify(values)
			}
			await fetch('http://localhost:3000/api/event/create-event', options)
				.then(res => res.json())
				.then((data) => {
					if(data) router.push('http://localhost:3000/create-event')
					console.log("event created");
				})


		}
		else{

			console.log("event values server = ",values);

			const options = {
				method: "POST",
				headers : { 'Content-Type': 'application/json'},
				body: JSON.stringify(values)
			}

			await fetch('http://localhost:3000/api/event/create-org-event', options)
				.then(res => res.json())
				.then((data) => {
					if(data) router.push('http://localhost:3000/create-event')
					console.log("org event created");
				})

		}

        

        
    }

	

    return(

		<div>
			<Head>
        <title>Create Event</title>
      	</Head>

      	<div className="p-16" >
        <h1 className="p-10 text-5xl font-bold leading-none sm:text-6xl">
            Create Event
        </h1>
						

			<section className="">
			<form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
				<fieldset className="grid grid-cols-4 gap-6 p-10 pt-2 rounded-md  ">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium">Event Inormation</p>
						<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
					</div>
					<div className="grid col-span-full grid-cols-2  sm:grid-cols-4 md:grid-cols-6 gap-4">
						
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="email" className="text-sm">Email</label>
							<input 
							onChange={(e)=>{
								
								setEmail(e.target.value)
							}} value={email}

							id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="name" className="text-sm">Name</label>
							<input 
							onChange={(e)=>{
								
								setName(e.target.value)
							}} value={name}
							
							id="name" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="type" className="text-sm">type</label>
							<input 
							onChange={(e)=>{
								
								setType(e.target.value)
							}} value={type}
							
							id="type" type="text" placeholder="type" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="time" className="text-sm">time</label>
							<input 
							onChange={(e)=>{
								
								setTime(e.target.value)
							}} value={time}

							id="time" type={"time"} placeholder="time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="location" className="text-sm">location</label>
							<input 
							
							onChange={(e)=>{
								
								setLocation(e.target.value)
							}} value={location}

							id="location" type={"text"} placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="descreption" className="text-sm">description</label>
							<input 
								onChange={(e)=>{
								
									setDescription(e.target.value)
								}} value={descreption}
								
								
							id="descreption" type={"text"} placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="stars" className="text-sm">stars</label>
							<input 
								onChange={(e)=>{

									setStars(e.target.value)
								}} value={stars}


							id="stars" type={"number"} max="5000" placeholder="stars" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="hobbies" className="text-sm">hobbies</label>
							<ListBox  hobbies={hobbies} setHobbies={setHobbies} hobbies_arr={hobbies_arr} />
						</div>

						
					</div>
				</fieldset>

				{/* <button type={"submit"} className={`w-full px-8 py-3 font-bold rounded-md text-white dark:bg-[#1976d2] dark:text-gray-900 bg-[#1565c0] `}>Create</button> */}
				<button type="submit" className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold tracking-wide uppercase rounded ">Create</button>
			
			
			</form>
			</section>
			</div>
		</div>

		

    );
}

export default CreateEvent;


