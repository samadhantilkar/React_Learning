import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About/About'
import Users from './Users'
import ProtectedRoutes from './protected-routes'
import { lazy } from 'react'
const Login=lazy(()=>import('./Login'))
const Dashboard=lazy(()=> import ( './Dashboard'))
const Products=lazy(()=>import('./Products'))
const ProductDetails=lazy(()=>import('./ProductsDetails'))
function App() {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path=''  element={<Home/>} />
            <Route path='login' element={<Login/>}/>

            <Route element={<ProtectedRoutes/>}>
              <Route index path='about' element={<About/>}/>
              <Route path='dashboard' element={<Dashboard/>}>
                <Route path='users' element={<Users/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='products/:id' element={<ProductDetails/>}/>
            </Route>
            </Route>
            
            <Route path='*' element={<p>404 not found</p>} /> 
        </Routes>
  </BrowserRouter>
  )
}

export default App
