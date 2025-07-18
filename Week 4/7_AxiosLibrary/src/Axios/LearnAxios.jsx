import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
// import api from "./api";
import { useQuey } from "./useQuery";

function LearnAxios(){
    // const [posts,setPosts]=useState([]);

    const {data,error,isPending}=useQuey("https://dummyjson.com/posts");


    // console.log(data);
    // async function fetchData(){
        // const reponse= await api.get("/products")
        // setPosts(data.products);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    if(error){
        return <p>Error:{error}</p>
    }

    if(isPending){
        return <p>Loading...</p>
    }

    return (
        <div>
            {data?.posts.map((item)=>(
                <Post key={item.id} item={item}/>
            ))}
        </div>
    )
}
export default LearnAxios;