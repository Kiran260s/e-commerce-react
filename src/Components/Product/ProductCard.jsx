import React, { useContext } from 'react'
import { DataContext } from '../../Context/CartContext'
import Product from '../../Pages/Product.jsx'

//We can us props or destructre it like :-
const ProductCard = ({ img, title, price, Product }) => {

    const {addToCart} = useContext(DataContext)

    return (
        <div className='bg-[#1f2937] rounded-2xl p-4 shodaow-lg hover:scale-105'>
            <img src={img} alt={title} className='w-full h-60 object-contain rounded-xl bg-white p-4' />
            <div className='flex flex-col justify-center content-around'>
                <h2 className='text-white text-lg font-semibold'>{title}</h2>
                <p className='text-cyan-400 text-xl font-bold'>${price}</p>
                <button onClick={()=>{
                    addToCart(Product)
                }} className='w-full bg-cyan-400 text-black py-2 rounded-xl font-semibold hover:bg-cyan-300'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard