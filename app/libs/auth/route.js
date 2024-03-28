import { getServerSession } from "next-auth";
import prisma from "../prismaDb";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export const authUserSession = async() => {
    const reponse = await getServerSession(authOptions)
    return reponse
}

export default async function getCurrentUser (){
    try{
        const session = await authUserSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where : {
                email : session.user.email 
            }
        })

        if(!currentUser){
            return console.log("user tidak ada")
        }

        return {
            ...currentUser,
            createdAt : currentUser.createdAt.toISOString(),
            updatedAt : currentUser.updatedAt.toISOString(),
            emailVerified : 
                currentUser.emailVerified?.toISOString() || null 
        }
    }catch(error){
        console.log("Erorrr",error)
        return null
    }
}