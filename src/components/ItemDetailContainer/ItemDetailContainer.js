import React, {useState, useEffect} from "react"
import { getProductsById } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId).then(item => {
            setProduct(item)
        }).catch(err =>{
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    if(loading){
        return(
            <h1>Cargando...</h1>
        )
    }

    return(
        <div className="ItemDetailContainer">
            {
                product ?
                    <ItemDetail {...product}/> :
                    <h1>El producto no existe</h1>
            }
        </div>
    )
}

export default ItemDetailContainer