import { useEffect, useRef, useState } from "react";

function LearnUseRefHook(){

    let count=0;
    const rCount=useRef(0);
    const [sCount,setSCount]=useState(0);
    const [time,setTime]=useState(0);
    const intervalRef=useRef();

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000);
        return ()=>clearInterval(intervalRef.current); // cleanup on unmount
    },[])

    const stopTimer=()=>{
        clearInterval(intervalRef.current);
    }

    function handleAdd(){
        count++;
        setSCount(prev=>prev+1); //asyn cousing re-render
        rCount.current++;
        console.log("Normal:",count);
        console.log("Ref:",rCount)
        console.log("state:",sCount);
    }

    console.log("rendering...");

    const inputRef=useRef(null);

    const result=useRef(null);

    useEffect(()=>{
        //perform heavy operation
        result.current=5;
    },[])

    console.log(result);

    return (
        <>
            <div>
                <p>Normal :{count}</p>
                <p>Ref: {rCount.current}</p>
                <p>State {sCount}</p>
                <button onClick={handleAdd}>Add</button>
                <input ref={inputRef} type="text" />
                <button onClick={()=>inputRef.current.focus()}>Focus</button>
            </div>

            <div>
                <p>Time:{time}</p>
                <button onClick={stopTimer}>Stop Timer</button>
            </div>
        </>
    )
}

export default LearnUseRefHook;