import { useState } from "react";

function Counter(){
    // let counter=0;
    let [num,setNum]=useState(0);
    function increseValue(){
        // counter++;
        // console.log(counter);
        
        setNum(num+1);
        console.log(num)
    }


    function decreaseValue(){
        setNum(num-1);
        console.log(num);
    }

    console.log("Rendered");

    return (
        <>
        <p >{num}</p>
        { num>=1 && <button onClick={decreaseValue}>Decrease Counter</button>}
        <br />
        {num<5 && < button onClick={increseValue}>Increase Counter</button>}
        <br />
        </>
    )
}
export default Counter;