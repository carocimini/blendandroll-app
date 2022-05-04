import ItemCart from "../ItemCart/ItemCart"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {

    const {cart, getTotal, clearCart} = useContext (CartContext)

    return (
            <>
            <div className="listCart">
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
                <h1 className="totalCart">Total a Pagar: $ {getTotal()}</h1>
                <button className="deleteCart" onClick={() => {clearCart()}}>Vaciar Carrito</button>
                <button className="confirmBuy"><Link className='formBuyLink' to={`/formBuy/`}>Confirmar Compra</Link></button>
            </div> 
            </>   
    )
}

export default Cart