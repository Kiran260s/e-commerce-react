import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import { DataContext } from '../../Context/CartContext'


const Navbar = () => {

    const {cart} = useContext(DataContext);
    
    // For Mobile sidebar
    const [open, setOpen] = useState(false)

  return (
    <nav className='bg-[#111827] text-white shadow-md sticky top-0 z-50'>
    
    <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
        <Link to="/" className='text-2xl font-bold text-cyan-500'>
        ShopSphere
        </Link>
        
        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
            <Link to="/" className='hover:text-cyan-500 transition'>Home</Link>
            <Link to="/products" className='hover:text-cyan-500 transition'>Product</Link>
            <Link to="/cart" className='hover:text-cyan-500 transition'>Cart({cart.length})</Link>
        </div>
        {/* Mobile Button */}
        <button onClick={() =>{
            setOpen(!open)
        }} className='md:hidden text-2xl'
        >
            {open ? <FaTimes/> : <FaBars/>}
        </button>
    </div>

        {/* Mobile Menu */}
        {
            open && (
                <div className='md:hidden bg-[#1f2937] px-5 py-4 flex flex-col gap-4 font-medium'>
                    <Link to="/" onClick={() => {
                        setOpen(false)
                    }} className='hover:text-cyan-300'>
                    Home
                    </Link>
                     
                     <Link to="/products" onClick={() => {
                        setOpen(false)
                    }} className='hover:text-cyan-300'>
                    Product                                                         
                    </Link>

                     <Link to="/cart" onClick={() => {
                        setOpen(false)
                    }} className='hover:text-cyan-300'>
                    Cart
                    </Link>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar
