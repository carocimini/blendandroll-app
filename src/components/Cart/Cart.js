import ItemCart from "../ItemCart/ItemCart"
import { useContext,useState } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const {cart} = useContext (CartContext)


    return (
            <>
            <div className="listCart">
                {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
            </div> 
            </>   
    )
}

export default Cart