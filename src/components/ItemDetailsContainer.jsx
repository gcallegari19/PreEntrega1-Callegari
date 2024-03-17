import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemDetailsContainer.css';
import { getProduct } from "../firebase/firebase.js"
import ItemDetail from './ItemDetail';

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState([]);
    const { pid } = useParams();
  
    useEffect(() => {
    //   fetch(`../data/productos.json`)
    //     .then(response => response.json())
    getProduct(pid)
        .then(prod => setProduct(prod))
        .catch(error => console.log(error))
    }, [])
  
    return (
      <div className="max-w-xs bg-[#F2E8E0] p-3 rounded-md shadow-md my-5 container-details space-x-4">
          <ItemDetail product={product}></ItemDetail>
      </div>
  
  
  
    );
  }
  
export default ItemDetailsContainer;