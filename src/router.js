import React from 'react'
import {Routes,Route} from "react-router-dom"
import Main from "./pages/Main"
import NewProduct from "./pages/NewProduct"
import ProductList from "./pages/ProductList"
import About from "./pages/About"
import ProductDetails from './pages/ProductDetails'




const router = () => {
  return (
    <div className='productMain'>
        <Routes>
            <Route index path='/' element={<Main/>}></Route>
            <Route path='/newproduct' element={<NewProduct/>}></Route>
            <Route path='/productlist' element={<ProductList/>}></Route>
            <Route path='/productlist/:id' element={<ProductDetails/>}></Route>
            <Route path='about' element={<About/>}></Route>
        </Routes>
    </div>
  )
}

export default router
