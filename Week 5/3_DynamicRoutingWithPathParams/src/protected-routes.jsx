import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./provider/with-auth-provider";

function ProtectedRoutes(){

    const location=useLocation();
    const from=location.pathname;
    
    const {user}=useAuth();
    const isLoggedIn= user!=null;  

    if(isLoggedIn) return <Outlet/>
    

    return <Navigate to={"/login"} replace state={{from}}  /> 

}
export default ProtectedRoutes;     