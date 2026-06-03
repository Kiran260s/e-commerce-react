import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import ProductCard from './Components/Product/ProductCard'
import { createContext } from 'react'

const App = () => {
  return (
    <div className='min-h-screen bg-[#0f172a]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}


export default App