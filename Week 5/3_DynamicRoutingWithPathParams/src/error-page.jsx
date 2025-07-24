import { useRouteError } from "react-router";

function ErrorPage(){

    const error=useRouteError();

    return (
        <div>
            <h1>Something went wrong...</h1>
            <p>Error Message:{error.message}</p>
            <p>Error Stack Trace:</p>
            <p>{error.stack}</p>
        </div>
    )
}
export default ErrorPage;