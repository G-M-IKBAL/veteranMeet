import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn'

import Users from '../../../model/Schema'
import Organization_accounts from '../../../model/Organization/organization_account';


import { compare } from 'bcryptjs';

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            name : "Credentials",
            async authorize(credentials, req){
                connectMongo().catch(error => { error: "Connection Failed...!"})

                // check user existance
                
                const accCheck = credentials.email.split("@");
                
                if(accCheck[1]==="org.com")
                {
                    const result = await Organization_accounts.findOne( { email : credentials.email})
                    if(!result){
                    throw new Error("No Organization Found with Email Please Sign Up...!")
                    }

                    // compare()
                    const checkPassword = await compare(credentials.password, result.password);
                    
                    // incorrect password
                    if(!checkPassword || result.email !== credentials.email){
                        throw new Error("Email or Password doesn't match");
                    }

                    return result;

                }
                else{

                    const result = await Users.findOne( { email : credentials.email})
                    if(!result){
                        throw new Error("No user Found with Email Please Sign Up...!")
                    }

                    // compare()
                    const checkPassword = await compare(credentials.password, result.password);
                    
                    // incorrect password
                    if(!checkPassword || result.email !== credentials.email){
                        throw new Error("Email or Password doesn't match");
                    }

                    return result;

                }
                

                

            }
        })
    ],
    secret: "XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=",
    session: {
        strategy: 'jwt',
    }
})