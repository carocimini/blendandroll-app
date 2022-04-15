import React, {useState} from "react"
import ItemCount from "../ItemCount/ItemCount"

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const onAdd = (condition) => {
        if(condition === '-'){
            setCount(count-1)
        }
        if(condition === '+'){
            setCount(count+1)
        }
    };
    const stock = 10;
    const initial = 0;
    
    return (
        <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} />
        </div>
    );
}

export default Counter;