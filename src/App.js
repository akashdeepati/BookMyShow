import React from "react";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import { Routes, Route } from 'react-router-dom';
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Register from "./Component/Register";
import HomeData from "./HomeData";
import Clothes from "./Component/Clothes";
import Mobiles from "./Component/Mobile";
import Jewellery from "./Component/Jewellery";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/HomeData' element={<HomeData />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/jewellery' element={<Jewellery />} />
        </Route>
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    </div>
  )
}
export default App
