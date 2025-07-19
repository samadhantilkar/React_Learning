import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Posts from "./Posts";
import { useState } from "react";

function LearnReactQuery(){

    const [page,setPage]=useState(1);
    const PAGE_SIZE=5

    async function fetchPosts(){
        const response=await axios.get(`https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${PAGE_SIZE*(page-1)}`);
        return response.data.posts;
    }
    
    const {data:posts,isPending,error,}=useQuery({
        queryKey:["posts",page],
        queryFn: fetchPosts,
        staleTime:5000,
        gcTime:30000,
        refetchOnWindowFocus:true
    });

    return (
        <div>
            <button onClick={()=>setPage((prev)=>page>1?page-1:1)}>Prev</button>
            <span>Page {page}</span>
            <button onClick={()=>setPage((prev)=>prev+1)}>Next</button>
            {posts?.map(item=>(
                <Posts item={item} key={item.id}/>  
            ))}
        </div>
    )

}
export default LearnReactQuery;