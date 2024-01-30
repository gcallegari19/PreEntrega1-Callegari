import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <>
    
      <NavBar></NavBar>
      
      <ItemListContainer mensaje='¡Bienvenido a la tienda de nuestras Ofrendas!'></ItemListContainer>
    
    </>
  );
}
export default App;
