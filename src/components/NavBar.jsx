import React from 'react';
import Logo from "../assets/logo.png";
import CartWidget from "./CartWidget"
import "../styles/NavBar.css"

import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
    
        <nav className="navbar navbar-expand-lg navbar-light p-2">
   
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img className="imagen-logo" src={Logo} alt="Logo" />
                    <span className="ml-2">O F R E N D A</span>
                </Link>               
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="navbar-light" aria-controls="navbar-light" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>       
                <div className="navbar-collapse" id="navbar-light">
                    <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link to={'/'}>
                                <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                                    Inicio
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/mate'}>
                                <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                                    Mate
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/fernetero'}>
                                <button className="bg-[#e8dad7] text-black px-3 py-1 rounded flex items-center">
                                    Fernetero
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/category/deco'}>
                                <button className="bg-[#e8dad7] text-black px-2 py-1 rounded flex items-center">
                                    Deco
                                </button>
                            </Link>
                        </li>
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>       
    </>
    
    );
}

export default NavBar;
