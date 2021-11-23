import { GetRequest } from "."

export const getData = async (URL:string) => {
    const response = await GetRequest(URL);
    return (Array.isArray(response))? response: [];
}