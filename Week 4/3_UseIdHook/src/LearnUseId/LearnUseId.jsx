import { useId } from "react";

function LearnUseId(){

    const inputId=useId();

    return(
    <>
        <label htmlFor={inputId}>Name</label>
        <input type="text" id={inputId}/>
    </>)
}

export default LearnUseId;