import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';
import Navbar from './assets/components/Navbar';



function App() {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/product" element={<ProductDetails/>} />
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
  </BrowserRouter>
}

export default App;