import React from "react";
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Offcanvas from "./components/Offcanvas";
import data from "./data.js"
import "./App.css"

export default function App () {
  let [cart, setCart] = useState([]);

  function addToCart(id) {
    setCart([...cart, id]);
  }

  function removeFromCart(id) {
    let arr = [...cart];
    arr.splice(cart.indexOf(id), 1);
    setCart(arr);
  }

  function clearCart() {
    alert("Thank you for your order!");
    setCart([]);
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Offcanvas data={data} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/products/:productId" element={<Product addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
};