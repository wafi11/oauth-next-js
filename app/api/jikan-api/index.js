import axios from "axios"

export const ApiJikan = async(resource,query) => {
    const api = process.env.API_JIKAN 
    const response = await axios.get(`${api}/${resource}?${query}`)
    return response?.data
}