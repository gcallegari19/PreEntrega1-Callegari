import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <li >
                <Link to={'/'}>
                    <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                        Inicio
                    </button>
                </Link>
            </li>
            <li>
                <Link to={'/category/mate'}>
                    <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                        Mate
                    </button>
                </Link>
            </li>
            <li >
                <Link to={'/category/fernetero'}>
                    <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                        Fernetero
                    </button>
                </Link>
            </li>
            <li >
                <Link to={'/category/deco'}>
                    <button className="bg-[#e8dad7] text-black px-2 py-1 rounded flex items-center">
                        Deco
                    </button>
                </Link>
            </li>
        </>
    );
}

export default Categories;
