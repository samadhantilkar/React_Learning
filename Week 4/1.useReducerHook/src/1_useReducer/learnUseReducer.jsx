import { useReducer, useState } from "react";

function LearnUseReducer(){

    // const [count, setCount]=useState(0);

    function myReducer(prevState,action){
        console.log("Inside the myReducer function")
        switch(action.type){
            case "INCREMENT":
                return {
                    count:prevState.count+1,
                    age:prevState.age,
                }

            case "DECREMENT":
                return {
                    count:prevState.count-1,
                    age:prevState.age,
                }
            case "MULTIPLY2":
                return {
                    age:prevState.age+1,
                    count:prevState.count*2,
                }

            default:
                break;
        }
    }

    const [state,dispatch]=useReducer(myReducer,{count:0,age:0})

    function handleAdd(){
        // setCount((prev)=>prev+1)
        console.log("start");
        dispatch({type:'INCREMENT'});
        console.log("end");
    }

    function handleSub(){
        // setCount((prev)=>prev-1);
        console.log("start");
        dispatch({type:"DECREMENT"});
        console.log("end");
    }

    function handleMul2(){
        dispatch({type:"MULTIPLY2"});
    }
    return (
        <>
            <p> {state.count} {state.age} </p>
            <button onClick={handleSub}>Sub</button>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMul2}>Multi 2</button>
        </>
    )
}
export default LearnUseReducer;