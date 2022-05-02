import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }

    const isInCart = (id) => {
        console.log('ya esta en el carrito')
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart ([...newCart])
        console.log('se elimino el producto')
    }

    const updateCart = (productToAdd) => {
        const prodToUpdate = cart.find(prod => prod.id === productToAdd.id)
        productToAdd.quantity = productToAdd.quantity + prodToUpdate.quantity
        const newCart = cart.filter((prod) => prod.id !== productToAdd.id)
        setCart([...newCart, productToAdd])
    } 

    const getTotal = () =>{
        let countTotal = 0
        cart.forEach(prod =>{ 
            countTotal += prod.quantity * prod.price
        })
        return countTotal
    }


    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, clearCart, removeItem, updateCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext