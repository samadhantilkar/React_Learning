import { createContext, useContext, useEffect, useState } from "react";

const AuthContext=createContext();

function AuthProvider({children}){

    const [user,setUser]=useState(null);

    useEffect(()=>{
        const token=localStorage.getItem("USER_TOKEN");

        if(token){
            //make backend API call to validate token
            const userObj={
                name:"Samadhan",
                email:"samadhan@gmail.com"
            }
            setUser(userObj);
        }

    },[]);

    return <AuthContext.Provider value={{user,setUser}}>
        {children}
    </AuthContext.Provider>
}

const useAuth=()=>{
    return useContext(AuthContext)
}
export {useAuth}
export default AuthProvider;