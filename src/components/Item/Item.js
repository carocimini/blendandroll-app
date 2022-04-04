import './Item.css'

const Item = ({name, img}) => {
    return(
        <section className="sectionProd">
            <picture>
                <img className="imgProd" src={img} alt={name}/>
            </picture>
            <h3 className="nameProd">{name}</h3>
            <button className="botonDet">Ver Detalle</button>
        </section>
            
    )
}

export default Item