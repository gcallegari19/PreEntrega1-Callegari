import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import { CarritoProvider } from './context/CartContext';


const App = () => {
  return (
    <>
      <BrowserRouter>  
        <CarritoProvider>
          <NavBar />
            <Routes>          
              <Route path='/' element={<ItemListContainer/>}></Route>
              <Route path='/category/:cid' element={<ItemListContainer/>}></Route>
              <Route path='/product/:pid' element={<ItemDetailsContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
            </Routes>   
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
