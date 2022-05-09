import React, {useState, useEffect} from "react"
//import { getProducts } from "../../asyncmock"
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { firestoreDb } from "../../services/firebase"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

        useEffect(() => {

            const collectionRef = categoryId ?
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)):
            query(collection(firestoreDb, 'products'), orderBy("name", "desc"))

            getDocs(collectionRef).then(response =>{
                console.log(response)
                const products = response.docs.map(doc=>{
                    return {id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
        },[categoryId])

        if(products.length === 0) {
            return <h1>No hay productos en esta categoria</h1>
        }

    return (
        <div className="contenedorProd">
            <h2>Listado de Productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer