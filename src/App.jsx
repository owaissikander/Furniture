import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './component/Header'
import Banner from './component/Banner'
import SecondCart from './component/SecondCart'
import Contact from './Pages/Contact'
import Footer from './component/Footer'
import Home from './Pages/Home'
import ProductDetails from './component/ProductDetails'
import Shop from './Pages/Shop'
import Halfbanner from './component/Halfbanner'




function App() {

  return (
    <BrowserRouter>
      <Halfbanner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Home/:id' element={<ProductDetails />} />
        <Route path='/Shop' element={<Shop />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
