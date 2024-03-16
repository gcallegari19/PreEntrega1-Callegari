import React from 'react';
import { Link } from 'react-router-dom';
import useCounter from '../hooks/useCounter';
import { GrClose } from "react-icons/gr";
import { useCarritoContext } from "../context/CartContext"
import { toast } from "react-toastify"

const ItemDetail = ({ product }) => {
        const { addItem } = useCarritoContext()
        const { count, increment, decrement, reset } = useCounter(1, product.stock, 1)
    
        const handleAddToCart = () => {
            addItem(product, count)
            toast.success(`Producto agregado al carrito correctamente`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            })
        }

    return (
        <div className='relative'>
            <div className="flex justify-end">
                <Link to={'/'}>
                <button className="bg-slate-50 absolute top-4 right-4 cursor-pointer0 text-gray-500 text-black px-2 py-2 rounded flex items-center hover:bg-gray-300"><GrClose /></button>
                </Link>
                    <img className='w-full object-cover mb-6' src={`${product.img}`} alt={`Imagen de ${product.title}`} />
                </div>
                <div className="flex items-center justify-center flex-column space-y-2">
                    <h2 className="text-lg font-semibold font-bold mb-2">{product.title}</h2>
                    <p className="text-gray-700 mb-4">Stock: {product.stock}</p>
                    <p className="text-lg font-semibold font-bold mb-2">Precio: ${product.price}</p>
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
