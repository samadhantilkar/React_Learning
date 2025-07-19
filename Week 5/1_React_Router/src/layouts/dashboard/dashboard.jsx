import { Outlet } from "react-router";

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <p>This is a dashboard</p>

            <Outlet/>

            <p>Footer from dashboard</p>
        </div>
    )
}
export default Dashboard;