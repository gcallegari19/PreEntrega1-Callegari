import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-[#e8dad7] text-black px-4 py-2 rounded flex items-center">
                        Inicio
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/mates'}>
                    <button className="bg-[#e8dad7] text-black px-4 py-2 rounded flex items-center">
                        Mates
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/fernetero'}>
                    <button className="bg-[#e8dad7] text-black px-4 py-2 rounded flex items-center">
                        Fernetero
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/terere'}>
                    <button className="bg-[#e8dad7] text-black px-4 py-2 rounded flex items-center">
                        Terere
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/deco'}>
                    <button className="bg-[#e8dad7] text-black px-4 py-2 rounded flex items-center">
                        Deco
                    </button>
                </Link>
            </li>
        </>
    );
}

export default Categories;
