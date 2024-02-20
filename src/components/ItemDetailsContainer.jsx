import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemDetailsContainer.css';
import ItemDetail from './ItemDetail';

const ItemDetailsContainer = () => {
  const [product, setProduct] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    fetch(`../data/productos.json`)
      .then(response => response.json())
      .then(products => {
        console.log("Productos desde el JSON:", products);

        const selectedProduct = products.find(prod => prod.id === parseInt(pid));
        console.log("Producto seleccionado:", selectedProduct);

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          console.error(`Producto con ID ${pid} no encontrado.`);
        }
      })
      .catch(error => console.error("Error al obtener productos:", error));
  }, [pid]);

  return (
    <div className="max-w-xl mx-auto bg-[#F2E8E0] p-3 rounded-md shadow-md my-5 container-details space-x-4">
        <ItemDetail product={product}></ItemDetail>
    </div>



  );
}

export default ItemDetailsContainer;