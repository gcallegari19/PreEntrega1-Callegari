import React from 'react';
import { useCarritoContext } from '../context/CartContext';
import useCounter from '../hooks/useCounter';

const ItemCart = ({product}) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
    return (
        <div className="flex items-center p-4 border-gray-300">
            <div className="mr-4">
                <img src={`${product.img}`} alt={`Imagen de ${product.title}`} className="w-24 h-24 object-cover" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.title}</h3>
            </div>
            <div className="flex items-center space-x-2">
                <button className="bg-[#F2E8E0] text-black px-3 py-1 rounded" onClick={async () => {
                    updateItem(product.id, count - 1)
                    decrement()
                }}>
                    -
                </button>
                <span className="text-xl font-bold">{count}</span>
                <button className="bg-[#F2E8E0] text-black px-3 py-1 rounded" onClick={() => {
                    updateItem(product.id, count + 1)
                    increment()
                }}>
                    +
                </button>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">Subtotal: ${product.price * count}</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => removeItem(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default ItemCart;
