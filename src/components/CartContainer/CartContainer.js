import React from "react";
import Cart from "../Cart/Cart";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartContainer = () => {
    const {getQuantity} = useContext (CartContext)

    return(
            <div>
                <h1>Cart</h1>
                <Link to='/' className='linkVolver'>Volver a comprar</Link>  
                <div>
                    {getQuantity() > 0 ? <Cart/> : <h2>El carrito esta vacio</h2>}
                </div>
            </div>
    )
}

export default CartContainer