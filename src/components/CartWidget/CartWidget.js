import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <div className="buttonCart">
            <img className="cartIcon" src='./images/icono-carrito.jpg' alt='icono-carrito'/>
            {getQuantity()}
        </div>
    )
}

export default CartWidget