import { GetRequest } from "."

export const getAccounts = async (URL:string) => {
    const response = await GetRequest(URL);
    return (Array.isArray(response))? response: [];
}