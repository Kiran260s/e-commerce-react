import React, { useContext } from 'react'
import { DataContext } from '../Context/CartContext'
import Product from './Product'
import { FaPlus, FaMinus } from "react-icons/fa"

const Cart = () => {

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(DataContext)

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  
  return (
    <section className='max-w-7xl mx-auto px-6 py-10'>
      <h1 className='text-white text-4xl font-boldmb-10 text-center'>Cart Page</h1>
      {
        cart.length === 0 ? (
          <div className='text-white text-2xl text-center mt-5'> Your Cart is empty</div>
        ) : (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {
                cart.map((item) => {
                  return (
                    <div key={item.id} className='bg-[#1f2937] rounded-2xl p-4'>
                      <img src={item.image} alt={item.title} className='w-full h-60 object-contain bg-white rounded-xl p-4' />
                      <div className='mt-4'>
                        <div className='text-white text-lg font-semibold'>
                          <h2>{item.title}</h2>
                          <div className='text-xl font-bold mt-2 flex items-center justify-between'>
                            <p className='text-cyan-400 text-xl font-bold mt-2 self-start'>${item.price}</p>
                            <div className='flex gap-4 items-center justify-around'>

                              <div className='flex items-center gap-4 mt-3'>

                                <button onClick={() => decreaseQuantity(item.id)}
                                  className='bg-red-500 p-2 rounded-lg hover:bg-red-400'>
                                  <FaMinus />
                                </button>

                                <span className='text-white text-2xl font-bold'>
                                  {item.quantity}
                                </span>

                                <button onClick={() => increaseQuantity(item.id)}
                                  className='bg-red-500 p-2 rounded-lg hover:bg-red-400'>
                                  <FaPlus />
                                </button>

                              </div>

                            </div>
                          </div>
                          <button onClick={() => {
                            removeFromCart(item.id)
                          }} className='w-full mt-4 bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-400 transition'>
                            Remove Item
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <h2 className='text-white text-2xl font-bold mt-8 text-right'>Total: ${totalPrice}</h2>
          </div>
        )
      }
    </section>
  )
}

export default Cart