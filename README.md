# INFORMACIÓN DEL PROYECTO
## _Curso de React Js_

Este proyecto es un ecommerce de una tabaqueria online, presentado como proyecto final del curso de React Js de CODERHOUSE.


## La app incluye las siguientes secciones:

- Home: con listado completo de productos.
- Vista de categorias de productos, selecionables desde la barra de navegacion.
- Vista detalle de productos, con contador para seleccionar cantidad segun stock disponible y boton para agregar al carrito.
- Vista Carrito, con detalle de productos agregados al carrito, cantidades, subtotales, boton para eliminar producto y monto total general de la compra. Y con boton confirmar compra.
- Vista formulario de compra, para completar los datos del comprador y boton que genera orden de compra.
- Barra de navegación con acceso al Home en el nombre de la tienda, menu de categorias, boton login (futuro desarrollo) y boton carrito que muestra la cantidad de productos agragados al momento y permite acceder a la vista del contenido del carrito.

## Base de Datos:
Se implemento Firebase/Firestore Database para alojar la informacion de productos, categorias y ordenes de compras generadas. Para ver el proyecto en funcionamiento es necesario hacer una carga inicial de productos y categorias en Firestore Database siguiendo los siguientes pasos:

- Crear colección _categories_
- Dentro de esta colección crear 3 documentos con los siguientes id: _accesorios_, _insumos_ y _tabacos_ y a cada uno de estos documentos asignarles los siguientes campos:

   **Documento id accesorios**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | description | Accesorios | string |
   | order | 3 | number |

   **Documento id insumos**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | description | Insumos | string |
   | order | 2 | number |

   **Documento id tabacos**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | description | Tabacos | string |
   | order | 1 | number |

- Crear colección _products_
- Dentro de esta colección crear 3 documentso con id automatico y los siguientes campos cada uno:

   **Producto 1**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | name | Tabaco Flandria Vainilla 30gr | string |
   | price | 450 | number |
   | category | tabacos | string |
   | img | https://www.distribuidorapop.com.ar/wp-content/uploads/2015/09/tabaco-flandria-vainilla-precios.jpg.webp | string |
   | stock | 10 | number |
   | description | Tabaco Flandria de Vainilla para armar cigarrillos, de origen belga y vienen en paquetes de 30 Grs. Saborizados sutilmente con una agradable gusto a vainilla, es uno de los tabacos preferidos de los fumadores casuales. | string |

   **Producto 2**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | name | Papel OCB ultimate 1 1/4 | string |
   | price | 180 | number |
   | category | insumos | string |
   | img | https://www.distribuidorapop.com.ar/wp-content/uploads/2016/02/papel-ocb-ultimate.jpg | string |
   | stock | 5 | number |
   | description | Es un papel ultra fino lo que significa que la combustión es lenta. | string |

   **Producto 3**:
   | Campo | Valor | Tipo |
   | ----- | ----- | ----- |
   | name | Maquina OCB automatica 1 1/4 | string |
   | price | 1300 | number |
   | category | accesorios | string |
   | img | https://www.distribuidorapop.com.ar/wp-content/uploads/2016/10/maquina-ocb-automatica-metal.jpg | string |
   | stock | 2 | number |
   | description | Maquina OCB automática para armar cigarrillos de una manera sencilla y rápida. | string |

## Inicializar la app:
En el directorio del proyecto se debe abrir un nuevo terminal y ejecutar el comando ... 
```sh
npm start
```
de esta manera se inicializa la app de forma local y se abre una pestaña en el navegador con la url [http://localhost:3000][PlMe] donde se podra visualizar el proyecto.

Una vez inicializada la app vemos como interactuan los componentes. El archivo App.js tiene definidas las rutas a los pincipales componentes, a partir de estos se ejecuta el hilo de sub-componentes que intervienen en cada proceso: 

**Componentes**:
- **_NavBar_**: Este componente es el header de nuestra aplicación, en el mismo se visualida la marca, un menu con las categorias definidas en Firestore que actua como filtro al mapear el listado de productos con el componente _ItemListContainer_. Tambien muestra un boton de acceso al login (futuro desarrollo) y un boton/visualizador que mediante el componente _CartWidget_ nos permite mostrar la cantidad de productos agregados al carrito y que al ser clickeado nos da acceso al detalle del contenido del carrito con el componente _CartContainer_.
- **_ItemListCointainer_**: Este componente es el encargado de traer los productos del la base de datos de Firestore y enlistarlos con la intervencion del componente _ItemList_, que mapea el listado de productos de la base y luego muestra la información que define el componente _Item_.
- **_ItemDetailContainer_**: Este componente es el encargado de mostrar el detalle del producto seleccionado. Toma el id como referencia de un producto, cuando el boton "Ver Detalle" es clickeado en el listado de productos y si encuentra este valor dentro de la base de Firestore ejecuta el componente _ItemDetail_ que define la información del producto que se visualizara. A su vez este ultimo hace uso del componente _Counter_ que maneja la logica que nos permite seleccionar la cantidad del productos segun el stock y agregarlos al carrito. La vista de este contador esta definida en el componente _ItemCount_.
- **_CartContainer_**: Este componente evalua si nuestro array carrito tiene productos agregados, en caso afirmativo ejecuta el componente _Cart_. Este ultimo mapea el array del carrito para traer los productos que contiene y nos muestra de cada uno la información predefinida por el componente _ItemCart_. Tambien nos ofrece botones para vaciar carrito o para confirmar la compra.
- **_CheckoutForm_**: Este componente se ejecuta con el uso del boton "Confirmar Compra" y nos muestra el formulario que debera completar el comprador y el boton para Generar Orden de Compra. Al clickear se genera una orden de compra con el contenido de la compra y los datos del comprador que se almacena automaticamente en Firestore.
- **_context_**: Este componente contiene toda la logica asociada al carrito, que es compartida con los componentes que se requiera gracias al uso de la función createContext de la libreria React. Las funciones que contienen son las de agregar producto al carrito, obtener la cantidad de productos que contiene el carrito, consultar por id si un producto existe en el carrito y retornar la informacion del mismo, vaciar el carrito, eliminar un item del carrito, actualizar el carrito si se agregan nuevos productos y obtener el monto total del carrito.

## Documentación de las Librerias/Herramientas utilizadas:
A continuación encontrara los links de acceso a la documentacion adicional

| Herramienta | link|
| ------ | ------ |
| React Js | [https://es.reactjs.org/][PlDb] |
| GitHub | [https://github.com/][PlGh] |
| Firebase | [https://firebase.google.com/][PlGd] |
| JavaScript | [https://www.javascript.com/][PlOd] |

## Desarrollador:

Carola Cimini

**Muchas gracias, por este curso!**

   [PlDb]: <https://es.reactjs.org/>
   [PlGh]: <https://github.com/>
   [PlGd]: <https://firebase.google.com/>
   [PlOd]: <https://www.javascript.com/>
   [PlMe]: <http://localhost:3000>
