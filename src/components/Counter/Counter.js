import React, {useState} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [quantity,setQuantity] = useState(0);

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