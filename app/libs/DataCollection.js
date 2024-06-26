import { authUserSession } from './auth/route'

export  async function DataCollection() {
    try{
        const session = await authUserSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma.collection.findMany({
            where : {
                email : session.user.email 
            }
        })

        if(!currentUser){
            return console.log("user tidak ada")
        }

        return currentUser
        
    }catch(error){
        console.log("Erorrr",error)
        return null
    }
}
