import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({id, name, price, quantity}) => {

    const {removeItem} = useContext (CartContext)

    return (

            <div>
                <p>{name}  
                 cantidad: {quantity}  
                 precio uni: $ {price} 
                 subtotal: $ {quantity * price} 
                <button className="deleteProd" onClick={() => {removeItem(id)}}>X</button></p>
            </div>
        
    )
}

export default ItemCart