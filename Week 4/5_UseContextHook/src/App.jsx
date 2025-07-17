import { useState } from "react";
import Dashboard from './5_UseContextHook/dashboard'
import { AuthProvider } from "./5_UseContextHook/Autho-context";
function App(){
    const [user,setUser]=useState({
        name:"Samadhan"
    })
    function handleToggleName(){
        setUser({
            ...user,
            name:user.name==="samadhan"?"SAMADHAN":"samadhan"
        })
    }
    return (
        // <AuthContext.Provider value={{user,setUser}}>
        <AuthProvider value={{user,setUser}}>
                <button onClick={handleToggleName}>Toggle Name</button>
                <Dashboard/>
        </AuthProvider>
        // </AuthContext.Provider>
        
    )
}
export default App;