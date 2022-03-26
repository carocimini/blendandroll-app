import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <img className="Logo" src='./images/logo-blendnroll.png' alt="logo-blendnroll"/>
            <h3 className="TextLogo">Tabaqueria Online</h3>
            <ul className="NavCategories">
                    <li className="NavItem">
                        <a className="NavLink" href="#">Tabacos</a>
                    </li>
                    <li className="NavItem">
                        <a className="NavLink" href="#">Insumos</a>
                    </li>
                    <li className="NavItem">
                        <a className="NavLink" href="#">Accesorios</a>
                    </li>
                </ul>   
            <button className="LogIn"> <img className="LogIcon" src='./images/icono-login.jpg' alt="icono-login"/>LogIn</button>
        </nav>
    )

}

export default NavBar