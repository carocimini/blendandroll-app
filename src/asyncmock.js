const products = [
    {
        id: '1',
        name: 'Tabaco Flandria Vainilla 30gr',
        price: 450,
        category: 'Tabacos',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2015/09/tabaco-flandria-vainilla-precios.jpg.webp',
        Stock: 20,
        description: 'Tabaco Flandria de Vainilla para armar cigarrillos, de origen belga y vienen en paquetes de 30 Grs. Saborizados sutilmente con una agradable gusto a vainilla, es uno de los tabacos preferidos de los fumadores casuales.',
    },
    {
        id: '2',
        name: 'Tabaco Flandria Eco 30gr',
        price: 450,
        category: 'Tabacos',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/10/tabaco-flandria-eco-mayorista.jpg',
        Stock: 10,
        description: 'Tabaco Flandria Eco finamente cortado y libre de aditivos tales como aromatizadores y conservantes. Producido a partir de hojas de tabaco cuidadosamente seleccionadas, esta variedad de tabaco Flandria logra una perfecta combinacion entre sabor y aroma.',
    },
    {
        id: '3',
        name: 'Tabaco Flandria Sauvage 30gr',
        price: 450,
        category: 'Tabacos',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/02/tabaco-flandria-sauvage-precio.jpg',
        Stock: 5,
        description: 'El tabaco Flandria Sauvage presenta un precio tan equilibrado como sus sabor. Es desde ya un tabaco que se encuadra dentro de la categoría Natural o sin aditivos. ',
    },
    {
        id: '4',
        name: 'Papel OCB ultimate 1 1/4',
        price: 180,
        category: 'Insumos',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/02/papel-ocb-ultimate.jpg',
        Stock: 20,
        description: 'Es un papel ultra fino lo que significa que la combustión es lenta.',
    },
    {
        id: '5',
        name: 'Papel OCB No Blanqueado 70mm',
        price: 180,
        category: 'Insumos',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2017/04/papel-ocb-no-blanqueado-70mm.jpg',
        Stock: 20,
        description: 'Es un papel fino que no ha sido sometido a ningún proceso de blanqueo y por eso su combustión es muy lenta',
    },
    {
        id: '6',
        name: 'Maquina OCB automatica 1 1/4',
        price: 1300,
        category: 'Accesorios',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/10/maquina-ocb-automatica-metal.jpg',
        Stock: 5,
        description: 'Maquina OCB automática para armar cigarrillos de una manera sencilla y rápida.',
    },
]

const categories = [
    {id: 'Tabacos', description: 'Tabacos'},
    {id: 'Insumos', description: 'Insumos'},
    {id: 'Accesorios', description: 'Accesorios'},
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}