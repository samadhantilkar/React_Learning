import { Link, NavLink, Outlet } from "react-router";

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <p>This are the children  below</p>

            <nav>
                <p>All the links:</p>
                <ul>
                    {/* <li><a href="products">Products from anchor</a></li>
                    <li> <Link to={"products"}> Products from links </Link></li>   
                    <li>
                        <Link to={"users"}>Users </Link>
                    </li> */}
                    <li> <NavLink to={"products"} replace> Products from links </NavLink></li>   
                    <li>
                        <NavLink to={"users"} replace>Users </NavLink>
                    </li>
                   
                </ul>
            </nav>

            <Outlet/>

            <p>Footer from dashboard</p>
        </div>
    )
}
export default Dashboard;