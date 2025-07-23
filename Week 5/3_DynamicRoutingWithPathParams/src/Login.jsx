import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuth } from "./provider/with-auth-provider";

function Login(){
    const location=useLocation();
    const from=location.state?.from ||  '/dashboard';
    
    const navigate=useNavigate();
    
    const {user,setUser}=useAuth();

    if(user) return <Navigate to={from} />

    function handleToggleLogin(){
        if(user){
            setUser(null);
            localStorage.clear();
        }else{
            const userObj={
                name:"Samadhan",
                email:"samadhan@gmail.com"
            }
            setUser(userObj);
            localStorage.setItem("USER_TOKEN","wfulhwefuahf");
        }
        navigate(from);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button
                className=" bg-yellow-400 text-black px-4 py-2 cursor-pointer" 
                onClick={handleToggleLogin}
            >
                    Toggle Login
            </button>
        </div>
    )
}
export default Login;