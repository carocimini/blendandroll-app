import React, {useState, useEffect} from "react"
//import { getProductsById } from "../../asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)

    const {productId} = useParams()

    useEffect(() => {
       // getProductsById(productId).then(item => {
       //     setProduct(item)
        //}).catch(err =>{
       //     console.log(err)
        //}).finally(() => {
        //    setLoading(false)

        getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
            console.log(response)
            const product = {id: response.id, ...response.data()}
            setProduct(product)
            })
            return(()=>{
                setProduct(product)
            })    
                
        },[productId])
        

    

    //if(loading){
    //    return(
    //        <h1>Cargando...</h1>
    //    )
   // }

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