import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoutes from "./protected-routes";
import About from "./About/About";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Products from "./Products";

function AppRouter(){

    // const router = createBrowserRouter([
    //     {path:"",index:true, Component:Home },
    //     {path:'login',Component:Login},
    //     {Component:ProtectedRoutes, children:[
    //         {path:'about', Component:About},
    //         {path:"dashboard",Component:Dashboard ,children:[
    //             // {index:true, Component:{Dash}},
    //             {path:"users", Component:Users},
    //             {path:"products",Component:Products},
    //             {path:"products/:id",Component:ProductDetails}

    //         ]}
    //     ]},
    //     {path:"*",element:<p>Not Found - 404 Page</p>}
    // ])

    const router=createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path=''  element={<Home/>} />
            <Route path='login' element={<Login/>}/>

            <Route element={<ProtectedRoutes/>}>
               <Route index path='about' element={<About/>}/>
               <Route path='dashboard' element={<Dashboard/>}>
                    <Route path='users' element={<Users/>}/>
                    <Route path='products' element={<Products/>}/>
                    <Route 
                        path="products/:id"
                        hydrateFallbackElement={<p>Loading</p>}
                        lazy={()=>
                            import("./ProductsDetails.jsx").then((module)=>({
                            Component:module.default,
                            }))
                        }
                    // path='products/:id' element={<ProductDetails/>}
                />
             </Route>
            </Route>
            
             <Route path='*' element={<p>404 not found</p>} /> 
    </Route>))

    return (
        <RouterProvider router={router}   />
    )
}
export default AppRouter;