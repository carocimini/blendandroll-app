import React from "react";
import Cart from "../Cart/Cart";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './CartContainer.css'

const CartContainer = () => {
    const {getQuantity} = useContext (CartContext)

    return(
            <div>
                <h1>Cart</h1>
                
                <div>
                    {getQuantity() > 0 ? 
                    <div className="contenedorCartView">
                        <Link to='/' className='linkVolver'>Volver</Link>
                        <Cart/>
                    </div> : 
                    <div className="contenedorCartView">
                        <h2>El carrito esta vacio</h2>
                        <button className="btnIrCompra"><Link to= '/' className="linkCompra">Ir a Comprar</Link></button>
                    </div>
                    }
                </div>
            </div>
    )
}

export default CartContainer