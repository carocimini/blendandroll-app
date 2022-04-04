import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <img className="logo" src='./images/logo-blendnroll.png' alt="logo-blendnroll"/>
            <h3 className="textLogo">Tabaqueria Online</h3>
            <ul className="navCategories">
                    <li className="navItem">
                        <a className="navLink" href="#">Tabacos</a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">Insumos</a>
                    </li>
                    <li className="navItem">
                        <a className="navLink" href="#">Accesorios</a>
                    </li>
                </ul>   
            <button className="logIn"> <img className="logIcon" src='./images/icono-login.jpg' alt="icono-login"/>LogIn</button>
            <CartWidget/>      
        </nav>
    )

}

export default NavBar;