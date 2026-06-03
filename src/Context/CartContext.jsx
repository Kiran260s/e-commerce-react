import React, { createContext, useEffect, useState } from 'react'
import Product from '../Pages/Product';

// Export this so other components wrapped inside App can use them
export const DataContext = createContext();

//Create a function to hanlde all the operations 
//Can pass props or destructre it into children
const CartProvider = ({children}) => {
    // const [cart, setCart] = useState([])
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(()=> {
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])
    
    function addToCart(Product) {       
        const existingItem = cart.find( (item) => item.id === Product.id) 
        
        if(existingItem){
            const updatedCart = cart.map((item) => item.id === Product.id ? {
                ...item, quantity: item.quantity+1
            }
            :item
        )
        setCart(updatedCart)
        }
        else {
            setCart([
                ...cart,{
                    ...Product,
                    quantity: 1
                }
            ])
        }

    } 

    function removeFromCart(id){
        const UpdateCart = cart.filter((item) => item.id !== id)
        setCart(UpdateCart)
    }

    function increaseQuantity(id){
       const updatedCart = cart.map((item) => {
        return item.id === id ? {
            ...item,
            quantity : item.quantity + 1 
        }: item
       })
       setCart(updatedCart)
    }

    function decreaseQuantity(id){
        const existingItem = cart.find((item) => item.id === id)
        if(existingItem.quantity === 1){
            removeFromCart(id)
            return
        }
        const updatedCart = cart.map((item) =>
        item.id === id  ? {
            ...item,
            quantity : item.quantity - 1
        }: item
    )
    
    setCart(updatedCart)
    }

    return(
        <DataContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartProvider