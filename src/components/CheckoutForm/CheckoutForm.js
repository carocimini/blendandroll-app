import { useState } from "react";
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CheckoutForm = () => {
    const {cart, getTotal} = useContext (CartContext)

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)

    const createOrder = (nombre, telefono, email) => {
        setLoading(true)
    
        const objOrder = {
            items: cart,
            buyer:{
                name: nombre,
                phone: telefono,
                email: email
            },
            total: getTotal(),
            date: new Date()
        }
    
        const ids = cart.map(prod => prod.id)
    
        const batch = writeBatch(firestoreDb)
    
        const collectionRef = collection(firestoreDb, 'products')
    
        const outOfStock = []
    
        getDocs(query(collectionRef, where(documentId(),  'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity
    
                if(dataDoc.stock >= prodQuantity){
                    batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(()=> {
            if(outOfStock.length === 0) {
                const collectionRef =  collection(firestoreDb, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({name: 'outOfStockError', products: outOfStock})
            }
        }).then(({id}) => {
            batch.commit()
            console.log(`El id de la orden es ${id}`)
        }).catch( error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
        return(
            <Link to='/' className='linkVolver'>Volver a Comprar</Link>
        )
    }
    
    if(loading) {
        return <h2>Se esta generando orden</h2>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre)
        console.log(telefono)
        console.log(email)
    }

    const handleKeyDown = (e) => {
        if(e.code === 'Space'){
            e.preventDefault()
        }
    }

    return (
        <div className="contenedorForm">
            <h2>Datos del Comprador</h2>
            <form className="formCompra" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input id="nombre" name="nombre" type='text'
                    onChange={(e) => setNombre(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <label htmlFor="telefono">Telefono:</label>
                <input id="telefono" name="telefono" type='number'
                    onChange={(e) => setTelefono(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button className="createOrder" type="submit" onClick={() => {createOrder(nombre, telefono, email)}}>Generar Orden de Compra</button>
            </form>
        </div>
        
    )
}

export default CheckoutForm
