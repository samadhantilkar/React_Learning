import { useId, useRef } from "react";

function LearnUseRefHook2(){

    const inputRef=useRef(null);

    return (
        <div>
            <button onClick={()=>inputRef.current.focus()}>Focus From Parent</button>
            <Child reff={inputRef}/>
        </div>
    )
}

function Child({reff}){
    const inputId=useId();
    return (
        <div>
            <label htmlFor={inputId}> Input in Child</label>
            <input ref={reff} type="text" id={inputId}/>
        </div>
    )
}
export default LearnUseRefHook2;