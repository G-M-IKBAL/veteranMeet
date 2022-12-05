import { useState } from "react";
import ListBox from "../components/listbox";
import Head from "next/head";


import { useFormik } from 'formik';
import { useRouter } from 'next/router';



function CreateEvent(){

    // const[name,setName] =useState("");
    // const[email,setEmail] =useState("");
    // const[type,setType] =useState("");
    // const[time,setTime] =useState("");
    // const[location,setlocation] =useState("");
    // const[description,setDescription] =useState("");
    // const[hobbies,setHobbies] =useState("");


	const router = useRouter()
    const formik = useFormik({
        initialValues: {
			email:"",
			name:"",
			type:"",
			time:"",
			location:"",
			descreption:"",
			hobbies:[]
        },
        onSubmit
    })


	async function onSubmit(values){

        console.log(values);
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

	console.log(formik.values)

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
			<form onSubmit={formik.handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
				<fieldset className="grid grid-cols-4 gap-6 p-10 pt-2 rounded-md  ">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium">Event Inormation</p>
						<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
					</div>
					<div className="grid col-span-full grid-cols-2  sm:grid-cols-4 md:grid-cols-6 gap-4">
						
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="email" className="text-sm">Email</label>
							<input 
							onBlur={formik.handleBlur} onChange={(e)=>{
								formik.handleChange(e);
								
							}} value={formik.values.email}

							id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="name" className="text-sm">Name</label>
							<input 
							onBlur={formik.handleBlur} onChange={(e)=>{
								formik.handleChange(e);
								
							}} value={formik.values.name}
							
							id="name" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>
						<div className="col-span-full sm:col-span-2">
							<label htmlFor="type" className="text-sm">type</label>
							<input 
							onBlur={formik.handleBlur} onChange={(e)=>{
								formik.handleChange(e);
								
							}} value={formik.values.type}
							
							id="type" type="text" placeholder="type" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="time" className="text-sm">time</label>
							<input 
							onBlur={formik.handleBlur} onChange={(e)=>{
								formik.handleChange(e);
								
							}} value={formik.values.time}
							id="time" type={"time"} placeholder="time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="location" className="text-sm">location</label>
							<input 
							onBlur={formik.handleBlur} onChange={(e)=>{
								formik.handleChange(e);
								
							}} value={formik.values.location}
							id="location" type={"text"} placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="descreption" className="text-sm">description</label>
							<input 
								onBlur={formik.handleBlur} onChange={(e)=>{
									formik.handleChange(e);
									
								}} value={formik.values.descreption}
								
							id="descreption" type={"text"} placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
						</div>

						<div className="col-span-full sm:col-span-2">
							<label htmlFor="hobbies" className="text-sm">hobbies</label>
							<ListBox  />
						</div>

						
					</div>
				</fieldset>

				{/* <button type={"submit"} className={`w-full px-8 py-3 font-bold rounded-md text-white dark:bg-[#1976d2] dark:text-gray-900 bg-[#1565c0] `}>Create</button> */}
				<button type="submit" className="w-full p-3 bg-blue-500 text-white text-sm font-bold tracking-wide uppercase rounded ">Create</button>
			
			
			</form>
			</section>
			</div>
		</div>

		

    );
}

export default CreateEvent;


