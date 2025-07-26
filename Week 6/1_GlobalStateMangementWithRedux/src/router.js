import { createBrowserRouter } from "react-router";
import Dashboard from "./Dashboard"
import Counter from "./Counter/Counter"

const router=createBrowserRouter([
    {index:true, Component:Dashboard},
    {path:"/counter",Component:Counter},
    // {path:"/shopping",Component:}
])
export default router;