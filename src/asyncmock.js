const products = [
    {
        id: 1,
        name: 'Tabaco Flandria Vainilla 30gr',
        price: 450,
        category: 'Tabaco',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2015/09/tabaco-flandria-vainilla-precios.jpg.webp',
        Stock: 20,
        description: 'Tabaco Flandria de Vainilla para armar cigarrillos, de origen belga y vienen en paquetes de 30 Grs. Saborizados sutilmente con una agradable gusto a vainilla, es uno de los tabacos preferidos de los fumadores casuales.',
    },
    {
        id: 2,
        name: 'Tabaco Flandria Eco 30gr',
        price: 450,
        category: 'Tabaco',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/10/tabaco-flandria-eco-mayorista.jpg',
        Stock: 10,
        description: 'Tabaco Flandria Eco finamente cortado y libre de aditivos tales como aromatizadores y conservantes. Producido a partir de hojas de tabaco cuidadosamente seleccionadas, esta variedad de tabaco Flandria logra una perfecta combinacion entre sabor y aroma.',
    },
    {
        id: 3,
        name: 'Tabaco Flandria Sauvage 30gr',
        price: 450,
        category: 'Tabaco',
        img: 'https://www.distribuidorapop.com.ar/wp-content/uploads/2016/02/tabaco-flandria-sauvage-precio.jpg',
        Stock: 5,
        description: 'El tabaco Flandria Sauvage presenta un precio tan equilibrado como sus sabor. Es desde ya un tabaco que se encuadra dentro de la categoría Natural o sin aditivos. ',
    },
]
export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}