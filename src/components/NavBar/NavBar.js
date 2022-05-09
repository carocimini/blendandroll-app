import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        getDocs(query(collection(firestoreDb, 'categories'), orderBy("order", "asc"))).then(response => {
            const categories = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [categories])

    return(
        <nav className="NavBar">
            <img className="logo" src='./images/logo-blendnroll.png' alt="logo-blendnroll"/>
            <Link to='/' className='linkHome'>
                <h3 className="textLogo">Tabaqueria Online</h3>
            </Link>
            <div className='navCategories'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) => isActive ? 'NavLinkActive' : 'NavLinkOption'}>{cat.description}</NavLink>)}
            </div>           
            <button className="logIn"> <img className="logIcon" src='./images/icono-login.jpg' alt="icono-login"/>LogIn</button>
            
            <CartWidget/>
            
        </nav>
    )

}

export default NavBar;