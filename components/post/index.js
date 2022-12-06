import { useState } from "react";

function Post({email,name}){

	const [text,setText] =useState("");
	const [multimedia,setMultimedia]=useState("");

	console.log(text);

	async function handleSubmit(e){

		e.preventDefault();
		
		const values = {
			email,text,multimedia
		}

        console.log("event values server = ",values);

        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/post/create-post', options)
            .then(res => res.json())
            .then((data) => {
                if(data){
					console.log(data)
					console.log("post created");
				} 
				
        })
		
		// here post call

	}
    return(
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-4xl">What is on your mind, {name}?</h2>
			{/* <div className="dark:text-gray-400"></div> */}
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form onSubmit={handleSubmit}  className="space-y-6 ng-untouched ng-pristine ng-valid">
		{/* <div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded " />
		</div> */}

		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" value={text} onChange={(e)=>setText(e.target.value)} rows="3" className="w-full p-3 rounded "></textarea>
		</div>
		<button type="submit" className="w-full p-3 bg-blue-500 text-white text-sm font-bold tracking-wide uppercase rounded ">Post</button>
	</form>
</div>
    )
}

export default Post;