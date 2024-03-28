import { ReadonlyURLSearchParams } from "next/navigation";

export const createurl = (
   { params }
) => {
    const paramsString = params
    const queryString = `${paramsString? "?" : ""}${paramsString}`

    return `${paramsString}/${queryString}`
}