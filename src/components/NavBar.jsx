import React from 'react';
import Logo from "../assets/logo.png";
import CartWidget from "./CartWidget"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "../styles/NavBar.css"
import Categories from './Categories';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
        {/* <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className='container'>
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img className="imagen-logo" src={Logo} alt="Logo"  />
                        <span className="ml-2">O F R E N D A</span>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLigth" aria-controls="navbarLigth" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">                              
                    <ul className="navbar-nav mx-auto mb-2 mb-xl-0">
                        <li className="nav-item nav-link">
                            <a href="/" >Inicio</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a href="/">Productos</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a href="/">Contacto</a>
                        </li>
                    </ul>
                    </div>
                    <div className='d-flex align-items-center'>
                    <form className='d-flex'>
                        <input className="form-control" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} size="lg"/></button>
                    </form>
                    <CartWidget></CartWidget>
                    </div>
                </div> 
            </nav>
        </div> */}

        <nav className=" d-flex justify-center align-items-center items-center p-4">
            <div className="container mx-auto ">
                <div className="flex items-center justify-between align-center">
                    <div>
                        <Link to="/" className="logo-link text-black d-flex align-items-center">
                            <img className="imagen-logo" src={Logo} alt="Logo" />
                            <span>O F R E N D A</span>
                        </Link>
                    </div>
                    <div >
                        <ul className="flex d-flex justify-center align-items-center items-center space-x-4 ">
                            <Categories></Categories>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </div>    
        </nav>
    </>
    
    );
}

export default NavBar;
