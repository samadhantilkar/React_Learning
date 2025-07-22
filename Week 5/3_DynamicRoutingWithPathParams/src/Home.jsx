import { Link, Navigate, useNavigate } from "react-router";
import Login from "./login";

function Home(){

    const navigate=useNavigate();
    const shouldRedirect=true;

    function handleBtnClick(){
        console.log("Button was clicked");
        navigate("/dashboard",{
            replace:true
        })
    }

    if(shouldRedirect){
        return <Navigate to={"/dashboard"}/>
    }

    

    return (
        <>
            <nav>
                <Link to={"/login"} state={{name:"Samadhan"}}> Login</Link>
                <br />
                <Link to={"/about"}> About</Link>
            </nav>
            <button onClick={handleBtnClick}>Click to send some where</button>
        </>
    )
}   
export default Home;