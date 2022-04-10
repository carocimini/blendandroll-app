import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {

    return(
        <article className='sectionProd'>
            <header className='header'>
                <h2 className='nameProd'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='imgProd'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: $ {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className="botonDet" >Ver Detalle</Link>
            </footer>

        </article>
    )
}

export default Item