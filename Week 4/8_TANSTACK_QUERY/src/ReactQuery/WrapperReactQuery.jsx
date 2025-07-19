import { useState } from "react";
import LearnReactQuery from "./LearnReactQuery";

function WrapperReactQuery(){

    const [show,setShow]=useState(true);

    return (
        <div>
            <button onClick={()=>setShow((prev)=>!prev)}> Toggle</button>

            {show && <LearnReactQuery/>}
        </div>
    )
}

export default WrapperReactQuery;