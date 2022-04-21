import React, {useState, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"

const Counter = (id, name, price) => {
    const [count, setCount] = useState(0);
    const [quantity, setQuantuty] =useState(0)
    const {addItem, isInCart} = useContext(CartContext)

    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count-1)
        }
        if(condition === '+'){
            setCount(count+1)
        }
    };

    const agregarProd = (count) => {
        setQuantuty(count)
        const objProd = {id, name, price}

        addItem({...objProd, quantity : count})
    }

    const initial = 0;
    const stock = 10;

    return (
        <div>
            {isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} agregarProd={agregarProd}/>}
        </div>
    );
}

export default Counter;