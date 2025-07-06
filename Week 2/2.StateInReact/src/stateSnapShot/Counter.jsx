import { useState } from "react";

function Counter(){
    let [num,setNum]=useState(0);

    let x=0;

    async function increseValue(){
        /*for(let i=0;i<10000000;i++){
            setNum(num+i);
            
        }*/
        // setNum(num+1);
        // 1st render happend here
        // await new Promise(resolve => setTimeout(resolve,2000));

        // setNum(num-1);
        //2nd render happen here
        
        // x++;
        // console.log("X=",x);
        // console.log("Num=",num)

        //(Updater function)
        // setNum(prevNum=>prevNum+1);  // this will update the value outside the component 
        // await new Promise(resolve=> setTimeout(resolve,2000));
        // setNum(prevNum=>prevNum-1); // this will update the value outside the component

        // setNum(num+1);  // it will take the updated value 
        // await new Promise(resolve=> setTimeout(resolve,2000));
        // setNum(num-1);  // it will take the updated value that is when the function start

        setNum(prevNum=>prevNum-1);
        setNum(prevNum=>prevNum-1);
        setNum(prevNum=>prevNum-1);
        console.log(num);
        console.log("Rendered");
    }


    // console.log("Rendered");

    return (
        <>
        <p >{num}</p>
        < button onClick={increseValue}>Increase Counter</button>
        </>
    )
}
export default Counter;