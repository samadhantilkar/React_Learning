import {useAuthContext } from "./Autho-context";

function Navbar(){

    const authContext=useAuthContext();

    function handleNameChange(){
        authContext.setUser({   ...authContext.user,
                                    name:authContext.user.name==="samadhan"?"shambhu":"samadhan"});
    }

    return (
        <>
            <div style={{backgroundColor:"lightblue",minHeight:"10vh"}}>
                Navbar {authContext.user.name}
            </div>
            <button onClick={handleNameChange}>Change Name</button>
        </>
        
    )
}
export default Navbar;