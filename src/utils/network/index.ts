import axios from "axios"

export const GetRequest = async (URL:string) =>{
    if(!URL){
        return;
    }
    try{
        const response = await axios.get(URL,{headers:{
            'Access-Control-Allow-Origin' : "*",
           "Content-Type": "application/json",
           "Content-Security-Policy":"default-src 'self'"
        }});
        return (response.status === 200)? response.data: {};
    } catch(e){
        return;
    }
}