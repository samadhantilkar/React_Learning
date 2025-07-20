import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Login from './layouts/login'
import Users from './layouts/dashboard/users'
import Products from './layouts/dashboard/products'
import Dashboard from './layouts/dashboard/dashboard'
import DashboardHome from './layouts/dashboard/dashboard-home'
import Home from './home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index
        // path=''
         element={<Home/>}/>
        <Route path='about' element={<p> About Paragraph</p>}/>
        <Route path='login' element={<Login/>}/>
        
        <Route path='dashboard' element={<Dashboard/>}> 
          <Route index element={<DashboardHome/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='products' element={<Products/>} /> 
        </Route>

        <Route path='*' element={<p> Not found - 404</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
