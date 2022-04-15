import './ItemDetails.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({ id, name, img, price, category, stock, description}) => {
    const [quantity,setQuantity] = useState(0)
    const agregarProd = (count) => {
        console.log(`se agregaron ${count} productos`)
        setQuantity(count)
    }
    return(
        <article className='sectionDetail'>
            <header className='headerDetail'>
                <h2 className='nameDetail'>
                    {name}
                </h2>
            </header>
            <picture className='detailpicture'>
                <img src={img} alt={name} className='imgDetail'/>
            </picture>
            <section className='infoSection'>
                <p className='infoDetail'>
                    Categoria: {category}
                </p>
                <p className='infoDetail'>
                    Descripción: {description}
                </p>
                <p className='infoPrice'>
                    Precio: $ {price}
                </p>
            </section>
            <footer className='ditailFooter'>
                
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <Counter agregarProd={agregarProd}/>}
            </footer>
        </article>
                
    )
}

export default ItemDetail