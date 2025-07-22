import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard from './Dashboard'
import Home from './Home'
import About from './About'
import Login from './login'
import Users from './Users'
import Products from './Products'
import ProductDetails from './ProductsDetails'

function App() {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path=''  element={<Home/>} />
            <Route index path='about' element={<About/>}/>
            <Route path='login' element={<Login/>}/>

            <Route path='dashboard' element={<Dashboard/>}>
                <Route path='users' element={<Users/>}/>
                <Route path='products' element={<Products/>}/>
                <Route path='products/:id' element={<ProductDetails/>}/>
            </Route>
            
            <Route path='*' element={<p>404 not found</p>} /> 
        </Routes>
  </BrowserRouter>
  )
}

export default App
