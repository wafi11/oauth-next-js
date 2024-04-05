import axios from "axios";
import { NextResponse } from "next/server";

async function fetchAnime () {
    const response = await axios("https://api.jikan.moe/v4/anime")
    const anime = await response.data
    console.log(anime)
    return anime
}

export async function GET(request){
    console.log(request)
    const anime = await fetchAnime()
    console.log(anime)
    // const {searchParams } = new URL(request.url)
    // console.log(searchParams.get('query'))
    // const query = searchParams.get('query')

    // const filterAnime = anime.data.filter((animek) => {
    //     return animek.title.toLowerCase().includes(query.toLowerCase())
    // })

    return NextResponse.json(anime)

}