import { useState } from "react";
import ListBox from "../components/listbox";

function CreateEvent(){

    const[name,setName] =useState("");
    const[email,setEmail] =useState("");
    const[type,setType] =useState("");
    const[time,setTime] =useState("");
    const[location,setlocation] =useState("");
    const[description,setDescription] =useState("");
    const[hobbies,setHobbies] =useState("");

    return(

    <section className="p-6 ">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Event Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid col-span-full grid-cols-2  sm:grid-cols-4 md:grid-cols-6 gap-4">
                
                <div className="col-span-full sm:col-span-2">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>
                <div className="col-span-full sm:col-span-2">
					<label for="name" className="text-sm">Name</label>
					<input id="name" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="type" className="text-sm">type</label>
					<input id="type" type="text" placeholder="type" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label for="time" className="text-sm">time</label>
					<input id="time" type={"time"} placeholder="time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>

                <div className="col-span-full sm:col-span-2">
					<label for="location" className="text-sm">location</label>
					<input id="location" type={"text"} placeholder="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>

                <div className="col-span-full sm:col-span-2">
					<label for="description" className="text-sm">description</label>
					<input id="description" type={"text"} placeholder="description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
				</div>

                <div className="col-span-full sm:col-span-2">
                    <label for="description" className="text-sm">hobbies</label>
                    <ListBox/>
                </div>

				
			</div>
		</fieldset>
		
	</form>
</section>

    );
}

export default CreateEvent;


