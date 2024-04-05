import axios from "axios";
import { NextResponse } from "next/server";

async function fetchAnime (query) {
    const response = await axios(`https://api.jikan.moe/v4/anime?${query}`)
    const anime = await response.data
    console.log(anime)
    return anime
}

export async function GET(request){
    const {searchParams } = new URL(request.url)
    console.log(searchParams.get('q'))
    const query = searchParams.get('q')
    console.log(request)
    const anime = await fetchAnime(`q=${query}`)
    console.log(anime)

    const filterAnime = anime.data.filter((animek) => {
        return animek.url.toLowerCase().includes(query.toLowerCase()) || animek.title.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filterAnime)

}