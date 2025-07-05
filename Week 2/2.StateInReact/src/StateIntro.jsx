import { useState } from "react";
import Counter from "./Counter";
function StateIntro(){

    const [showCounter,setShowCounter]=useState(true);

    return(
        <>
            {showCounter && <Counter/>}
            <button onClick={()=>setShowCounter(!showCounter)}>Toggle Countet</button>
        </>
    )
}

export default StateIntro;