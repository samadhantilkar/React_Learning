import { memo, useMemo, useState } from "react";

const Child=memo(({value})=>{
    console.log("Child rendered");
    return <div className="border border-red-500 p-4">Value in Child:{value}</div>
});

// const MemoizedChild=React.memo(Child);

function LearnMemo(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Samadhan");

    // const a=useMemo(()=>{
    //     return [4,5,1,2,3]
    // },[]);

    const [a,setA]=useState([4,5,1,2,3]);

    const  sum=useMemo(()=>{
        console.log("Calculating sum");
        return a.reduce((acc,curr)=>acc+curr,0)
    },[a] );

    console.log("Parent rendered");

    return(
        <div className="flex items-center justfy-center h-screen">
            <div className="flex flex-col items-center gap-4 border p-8 rounded-sm">
                <button className="bg-teal-600 px-4 py-2 rounded-sm" onClick={()=>setCount((count)=>count+1)} >
                    Increment in Parent:{count}
                </button>
                {/* <MemoizedChild value={name}/> */}
                <Child value={name}/>
            </div>
        </div>
    )
}
export default LearnMemo;