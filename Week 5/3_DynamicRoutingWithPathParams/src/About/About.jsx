import { lazy, Suspense, useState } from "react";
const AboutMe = lazy(()=> import("./AboutMe")) ;

function About(){
    const [show,setShow]=useState(false);
    return (
        <Suspense fallback={<p>Suspense From About</p>}>
            <div>
                <h1>About Us</h1>
                <button onClick={()=>setShow((prev)=>!prev)} 
                className="bg-amber-300 cursor-pointer">
                    Toggle About Me
                </button>
                <Suspense fallback={<div> Loading from the about me Component</div>}>
                    {show && <AboutMe/>}
                </Suspense>
                </div>
        </Suspense>
    )
}
export default About;