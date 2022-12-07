import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../lib/validate'
import { useRouter } from 'next/router';
import ListBox from '../components/listbox';
import Category from '../components/category';

const hobbies_arr = [
	{ name: 'football' },
	{ name: 'cricket' },
	{ name: 'hockey' },
	{ name: 'movies' },
]



// const categories_arr = [
// 	{ name: 'NGO' },
// 	{ name: 'Educational Institution' },
// 	{ name: 'Organization' }
// ]

const categories_arr = [
	'NGO' ,
	'Educational Institution',
	'Organization'
]


export default function Register(){

    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()

    const[name,setName] =useState("");
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");
    const[cpassword,setCpassword] =useState("");
    const[contact,setContact] =useState("");
    const[active_status,setActiveStatus] =useState("false");
    const[hobbies,setHobbies] =useState(hobbies_arr[0]);
    const[profession,setProfession] =useState("");
    const[city,setCity] =useState("");


    //organization
    const[name_of_org,setNameOfOrganization] =useState("");
    const [category,setCategory] =useState(categories_arr[0]);


    const [userForm,setUserForm] =useState(true);
    const [organizationForm,setOrganizationForm] =useState(false);
	
    console.log(userForm);
    console.log(organizationForm);


    async function handleSubmit1(event){

        event.preventDefault()
        

		const values = {
			email,name,password,contact,active_status,hobbies,profession,city 
		}



        console.log("register values to server = ",values);
        
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })
    }





    async function handleSubmit2(event){

        event.preventDefault();
        

		const values = {
			email,name_of_org,password,contact,category,city 
		}



        console.log("register values to server = ",values);
        
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup-org', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })
    }

    return (
        <Layout>


        <Head>
            <title>Register</title>
        </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Create account for</p>
                <div className='flex flex-row space-x-5 justify-center'>
                    <button onClick={()=>{setUserForm(true)
                    setOrganizationForm(false)
                    }} className='text-white p-2 bg-blue-500 text-lg font-bold rounded-xl' >User</button>
                    <p className='text-lg font-bold p-2 text-gray-400'> or </p>
                    <button onClick={()=>{setOrganizationForm(true)
                    setUserForm(false)}} className='text-white p-2 bg-blue-500 text-lg font-bold  rounded-xl'>organization</button>
                </div>
                 
            </div>
            <>
            {
            
            userForm===true?    
            <form className='flex flex-col gap-5' onSubmit={handleSubmit1}>
                <div className={`${styles.input_group} `}>
                    <input 
                    type="text"
                    name='Username'
                    placeholder='Name'
                    className={styles.input_text}
                    
                    onChange={(e)=>{
                                
                        setName(e.target.value)
                    }} value={name}

                    />
                    <span className='icon flex items-center px-4'>
                        <HiOutlineUser size={25} />
                    </span>
                </div>
                
                <div className={`${styles.input_group}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    
                    onChange={(e)=>{
                                
                        setEmail(e.target.value)
                    }} value={email}

                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                
                <div className={`${styles.input_group} `}>
                    <input 
                    type={`${show.password ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}

                    onChange={(e)=>{
                                
                        setPassword(e.target.value)
                    }} value={password}
                
                    />
                    <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>
                
                <div className={`${styles.input_group} `}>
                    <input 
                    type={`${show.cpassword ? "text" : "password"}`}
                    name='cpassword'
                    placeholder='Confirm Password'
                    className={styles.input_text}

                    onChange={(e)=>{
                                
                        setCpassword(e.target.value)
                    }} value={cpassword}
                
                    />
                    <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword})}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                <div className={`${styles.input_group} `}>
                    <input 
                    type="text"
                    name='contact'
                    placeholder='Contact'
                    className={styles.input_text}


                    onChange={(e)=>{
                                
                        setContact(e.target.value)
                    }} value={contact}
                    />
                </div>


                <div className={`${styles.input_group} `}>
                    <input 
                    type="text"
                    name='profession'
                    placeholder='Profession'
                    className={styles.input_text}
                    
                    onChange={(e)=>{
                                
                        setProfession(e.target.value)
                    }} value={profession}
                    />
                </div>

                <div className={`${styles.input_group} `}>
                    <input 
                    type="text"
                    name='city'
                    placeholder='City'
                    className={styles.input_text}
                    
                    onChange={(e)=>{
                                
                        setCity(e.target.value)
                    }} value={city}
                    />
                </div>

                <ListBox  hobbies={hobbies} setHobbies={setHobbies} hobbies_arr={hobbies_arr} />

            
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Sign Up
                    </button>
                </div>
        </form>
        :
        <form className='flex flex-col gap-5' onSubmit={handleSubmit2}>
            <div className={`${styles.input_group} `}>
                <input 
                type="text"
                name='name_of_org'
                placeholder='Name'
                className={styles.input_text}
                
                onChange={(e)=>{
                            
                    setNameOfOrganization(e.target.value)
                }} value={name_of_org}

                />
                <span className='icon flex items-center px-4'>
                    <HiOutlineUser size={25} />
                </span>
            </div>
            <div className={`${styles.input_group}`}>
                <input 
                type="email"
                name='email'
                placeholder='Email'
                className={styles.input_text}
                
                onChange={(e)=>{
                            
                    setEmail(e.target.value)
                }} value={email}

                />
                <span className='icon flex items-center px-4'>
                    <HiAtSymbol size={25} />
                </span>
            </div>
            <div className={`${styles.input_group} `}>
                <input 
                type={`${show.password ? "text" : "password"}`}
                name='password'
                placeholder='password'
                className={styles.input_text}

                onChange={(e)=>{
                            
                    setPassword(e.target.value)
                }} value={password}
            
                />
                <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password})}>
                    <HiFingerPrint size={25} />
                </span>
            </div>
            
            <div className={`${styles.input_group} `}>
                <input 
                type={`${show.cpassword ? "text" : "password"}`}
                name='cpassword'
                placeholder='Confirm Password'
                className={styles.input_text}

                onChange={(e)=>{
                            
                    setCpassword(e.target.value)
                }} value={cpassword}
            
                />
                <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, cpassword: !show.cpassword})}>
                    <HiFingerPrint size={25} />
                </span>
            </div>

            <div className={`${styles.input_group} `}>
                <input 
                type="text"
                name='contact'
                placeholder='Contact'
                className={styles.input_text}


                onChange={(e)=>{
                            
                    setContact(e.target.value)
                }} value={contact}
                />
            </div>


            

            <div className={`${styles.input_group} `}>
                <input 
                type="text"
                name='city'
                placeholder='City'
                className={styles.input_text}
                
                onChange={(e)=>{
                            
                    setCity(e.target.value)
                }} value={city}
                />
            </div>

            {/* <ListBox  category={category} setCategory={setCategory} categories_arr={categories_arr} /> */}
            <Category category={category} setCategory={setCategory} categories_arr={categories_arr}/>
            
            <div className="input-button">
                <button type='submit' className={styles.button}>
                    Sign Up
                </button>
            </div>
        </form>

            }      
            </>      
            

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                Have an account? <Link href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
            </p>
        </section>
        </Layout>
    )
}


