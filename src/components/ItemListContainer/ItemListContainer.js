import React, {useState, useEffect} from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

        useEffect(() => {
            getProducts(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            })
        },[categoryId])

    return (
        <div className="contenedorProd">
            <h2>Listado de Productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer