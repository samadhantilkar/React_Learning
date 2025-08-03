import { startTransition, useState, useTransition } from "react";

const Child= ({text})=>{
    return <div className="border-b pb-1"> {text} </div>
}

const UseTransitionHook = ()=>{
    const [data,setData]=useState([]);
    // const [isPendin,startTransition] =useTransition();

    const handleChange = (value) =>{


        startTransition(()=>{
            console.log("handleChange",value)
            for(let i=0;i<1000;i++){
            const text=value + " "+ i;
            setData((prev)=>[text, ...prev])
        }
        })

        // console.log("handleChange",value)
        // for(let i=0;i<1000;i++){
        //     const text=value + " "+ i;
        //     setData((prev)=>[text, ...prev])
        // }
    };


    return (
        <div className="p-6 overflow-auto flex justify-center">
            <div className="w-2xl space-y-4">
                <input type="text" className="px-2 py-2  border w-full"  onChange={(e) =>handleChange(e.target.value)}/>
                <p className="text-center">Total Item: {data.length}</p>
                <div className="p-4 h-[calc(100vh-6rem)] inset-x-0 bottom-0  overflow-auto">
                    {data.map((item,index)=>
                        <Child key={index} text={item} />
                    )} 
                </div>
            </div>
        </div>
    )
}
export default UseTransitionHook;