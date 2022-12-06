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

const hobbies_arr = [
	{ name: 'football' },
	{ name: 'cricket' },
	{ name: 'hockey' },
	{ name: 'movies' },
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
	

    // const formik = useFormik({
    //     initialValues: {
    //         name : '',
    //         email: '',
    //         password:'',
    //         cpassword: '',
    //         contact:'',
    //         active_status:'',
    //         hobbies:[],
    //         profession:'',
    //         city:''
            
    //     },
    //     validate: registerValidate,
    //     onSubmit
    // })

    async function handleSubmit(event){

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

    return (
        <Layout>


        <Head>
            <title>Register</title>
        </Head>

        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
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
                {/* {formik.errors.name && formik.touched.name ? <span className='text-rose-500'>{formik.errors.name}</span> : <></>} */}
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
                {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
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
                {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

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

                {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>} */}

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Sign Up
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                Have an account? <Link href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
            </p>
        </section>
        </Layout>
    )
}