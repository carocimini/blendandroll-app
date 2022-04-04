import React, {useState} from "react"
import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = (props) => {
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
    const comprarProd = () => {
        console.log(`se agregaron ${count} productos`)
    }
    return (
        <div>
            <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} comprarProd={comprarProd}/>
        </div>
    );
}

export default ItemListContainer;