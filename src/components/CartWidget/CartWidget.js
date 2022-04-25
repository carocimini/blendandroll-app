import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    
    return(
        
        <button className="buttonCart">
            <Link className='linkCart' to={`/cartView/`}>
            <img className="cartIcon" src='./images/icono-carrito.jpg' alt='icono-carrito'/>
            {getQuantity()}
            </Link>
        </button>
    
    )
}

export default CartWidget