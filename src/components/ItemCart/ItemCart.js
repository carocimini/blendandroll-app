import { useContext } from "react"
import CartContext from "../../context/CartContext"
import './ItemCart.css'

const ItemCart = ({id, name, price, quantity}) => {

    const {removeItem} = useContext (CartContext)

    return (

            <div className="containItemCart">
                <p className="itemCart">{name}      cantidad: {quantity}        precio uni: $ {price}       subtotal: $ {quantity * price}      <button className="deleteProd" onClick={() => {removeItem(id)}}>X</button></p>
            </div>
    )
}

export default ItemCart