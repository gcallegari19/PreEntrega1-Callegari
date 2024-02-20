import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Item.css";

const Item = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
        <div className="max-w-xs mx-auto bg-[#F2E8E0] p-3 rounded-md shadow-md my-5">
            <img src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} className='productoImg'/>
            <h2 className="text-lg font-semibold font-bold mb-2">{product.title}</h2>
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Precio: ${product.price}</span>
            </div>
        </div>
    </Link>
  );
}

export default Item;