import { useLocation } from "react-router";

function Login(){

    const location=useLocation();

    console.log(location);

    return (
        <>
            <p>Login Components</p>
        </>
    )
}
export default Login;