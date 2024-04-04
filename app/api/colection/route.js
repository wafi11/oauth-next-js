import prisma from "../../libs/prismaDb";
export async function POST(request) {
  const { anime_mal_id, email,anime_title, anime_image } = await request.json();

  const data = {
    anime_mal_id,
    email,
    anime_title, anime_image
  };
  console.log(data);
  const createCollection = await prisma.collection.create({ data });
  if (!createCollection)
    return Response.json({ status: 500, isCretead: false });

  return Response.json({ data });
}

