import axios from "axios"

export const ApiJikan = async(resource,query) => {
    const api = process.env.API_JIKAN 
    const response = await axios.get(`${api}/${resource}?${query}`)
    const result = response.data
    return response.data
}


export const getNestedAnimeResponse = async(resource,object)=> {
    const response = await ApiJikan(resource)
    return response.data.flatMap(item => item[object])
}