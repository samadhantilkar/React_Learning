import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./provider/with-auth-provider";
import { Suspense } from "react";

function ProtectedRoutes(){

    const location=useLocation();
    const from=location.pathname;
    
    const {user}=useAuth();
    const isLoggedIn= user!=null;  

    if(isLoggedIn) return 
                        <Suspense fallback={<p>Suspense from thr Protected Routes</p>}>
                            <Outlet/>
                        </Suspense>
    

    return <Navigate to={"/login"} replace state={{from}}  /> 

}
export default ProtectedRoutes;     