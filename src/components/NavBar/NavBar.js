import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

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