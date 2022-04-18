import React, {useState, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"

const Counter = (id, name, price) => {
    const [count, setCount] = useState(0);
    const [quantity,setQuantity] = useState(0);

    const {cart, setCart} = useContext(CartContext)

    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count-1)
        }
        if(condition === '+'){
            setCount(count+1)
        }
    };

    const agregarProd = (count) => {

        setQuantity(count)

        const objProd = {id, name, price}

        setCart([...cart, {...objProd, quantity : count}])
    }

    const initial = 0;
    const stock = 10;

    return (
        <div>
            {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} agregarProd={agregarProd}/>}
        </div>
    );
}

export default Counter;