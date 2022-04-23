import React from "react"
import './ItemCount.css'

const ItemCount = ({onAdd, agregarProd, stock, initial, count}) => { 
    
    return (
        <div className="contadorBox">
            <div className="contador">
            <button className="botonCount" onClick={() => {if(count>initial){onAdd ('-')}}}>-</button>
            <h4 className="countResult">{count}</h4>
            <button className="botonCount" onClick={() => {if(count<stock){onAdd ('+')}}}>+</button>
            </div>
            <button className="botonComprar" onClick={() => {if(count>initial){agregarProd (count)}}}>Agregar al Carrito</button>
        </div>
    )
    
}

export default ItemCount;