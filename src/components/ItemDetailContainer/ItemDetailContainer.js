import React, {useState, useEffect} from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const {productId} = useParams()

    useEffect(() => {
        setLoading(true)

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            console.log(response)
            const product = {id: response.id, ...response.data()}
            setProduct(product)
            })
            return(()=>{
                setProduct(product)
            })    
                
        },[productId]).catch( error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })

    if(loading) {
        return <h2>Cargando...</h2>
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