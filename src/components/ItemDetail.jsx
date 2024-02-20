import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../Hooks/useCounter';

const ItemDetail = ({product}) => {
    const { count, increment, decrement, reset } = useCounter(1, product.stock, 1)

    const handleAddToCart = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <div>
            <div>
                <Link to={'/'}>
                <button className="absolute top-40 right-30 text-gray-700 hover:text-gray-900" >Cerrar</button>
                </Link>
                    <img className='w-full object-cover mb-6' src={`../img/${product.img}`} alt={`Imagen de ${product.title}`} />
                </div>
                <div className="flex items-center justify-center flex-column space-y-2">
                    <h2 className="text-lg font-semibold font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">Stock: {product.stock}</p>
                    <span className="text-xl font-bold">${product.price}</span>
                </div>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4">
                        <button className="bg-[#de9d89] text-white px-4 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="bg-[#de9d89] text-white px-4 py-2 rounded" onClick={increment}>
                            +
                        </button>
                        <button className="bg-[#de9d89] text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <button className="bg-[#de9d89] text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>

    );
}

export default ItemDetail;
