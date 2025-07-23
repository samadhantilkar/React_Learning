import { useEffect, useState } from "react";

function LearnUseEffect(){

    const [data,setData]=useState({})
    const [id,setId]=useState(1);
    const [loading,setLoading]=useState(false);

    async function fetchData(abortController){
        console.log("inside the fetch data method")
        try{
            setLoading(true)
            const url="https://dummyjson.com/products/"+id;
            const response= await fetch(url,{signal:abortController.signal})
            const jsonData= await response.json();
            setData(jsonData) ; 
        }
        catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
    }

    // console.log("Rendering..");

    useEffect(()=>{
        const abortController=new AbortController();
        fetchData(abortController);
        return ()=>{
            // setId(1);
            console.log("cleaning up");
            abortController.abort(); //operation on cleanup
        }
    },[id])

    // fetchData();

    return (
        <>
            {loading && <p>loading...</p>}
            <p>{id} {data.title}</p>
            <button id={id} onClick={()=>setId(prev=>prev+1)}>Next</button>
        </>
    )
}

export default LearnUseEffect;