import React from 'react'
import { authUserSession } from './auth/route'
import prisma from './prismaDb'

export async function DataComments(anime_mal_id) {
    // const session = await authUserSession()
    
    // if(!session?.user?.email){
    //     return null
    // }

    const currentUser = await prisma.comment.findMany({
        where : {anime_mal_id}
    })
    
    return currentUser
}
