import SignIn from "./sign-in";
import { useTheme } from "./useTheme";

function LearnCustomHook(){

    const {theme,setTheme}=useTheme("dark");

    return (
        <div>
            {/* <p>{theme}</p>
            <button onClick={()=>setTheme(prev=>prev==='light'?"dark":"light")}>Toggle</button> */}
            <SignIn/>
        </div>
    )
}

export default LearnCustomHook;