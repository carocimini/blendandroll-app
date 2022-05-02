import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cartView/' element={<CartContainer/>}/>
            <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
            <Route path='/formBuy' element={<CheckoutForm/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
