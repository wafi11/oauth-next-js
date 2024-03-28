import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth ,{ AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import prisma from "../../../app/libs/prismaDb";

export const authOptions  = {
    adapter : PrismaAdapter(prisma), 
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID ,
            clientSecret : process.env.GITHUB_CLIENT_ID 
        }),
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID ,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET ,
        }),
        CredentialsProvider({
            name : 'credentials',
            credentials : {
                email : {label : 'email' ,type : 'text'},
                password : {label : 'password', type : "password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error('Invalid Credentials')
                }

                const user = await prisma.user.findUnique({
                    where : {
                        email : credentials.email
                    }
                })
                if(!user || !user?.hashedPassword){
                    throw new Error('invalid')
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword 
                );
                if(!isCorrectPassword){
                    throw new Error('invalid')
                }
                return user
            }
        })
    ],
    pages : {
        signIn : '/'
    },
    debug : process.env.NODE_ENV === 'development',
    session : {
        strategy : 'jwt'
    },
    secret :  process.env.NEXTAUTH_SECRET
}
export default NextAuth(authOptions)