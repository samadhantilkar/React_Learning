import axios from "axios";
import { useEffect, useState } from "react"

export const useQuey=(url)=>{

    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(false);
    const [error,setError]=useState(null);

    // console.log(url);

    async function fetchData(){
        setIsPending(true);
        try{
            const response= await axios.get(url);
            console.log(response.data);
            setData(response.data);
        }catch(e){
            setError(e);
        }finally{
            setIsPending(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[url])  
    
    return {data,isPending,error};
}