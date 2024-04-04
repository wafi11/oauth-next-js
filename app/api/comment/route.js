import React from 'react'
import prisma from "../../libs/prismaDb";
import { NextResponse } from 'next/server';
import { authUserSession } from '../../libs/auth/route';
export async function POST(request) {
  const { anime_mal_id, email,anime_title, anime_image ,comment,username} = await request.json();

//   const session = await authUserSession()
//   if(!session?.user?.email){
//     return null
// }

  const data = {
    anime_mal_id,
    email,
    anime_title, anime_image ,comment,username
  };
  // if(!anime_mal_id || !anime_title || !anime_image|| !comment || !email || !username){
  //   return NextResponse.error()
  // }

   
  const createCollection = await prisma.comment.create({ data });
  if (!createCollection)
    return Response.json({ status: 500, isCretead: false });
  return Response.json({ status : 200});
    
    
}


