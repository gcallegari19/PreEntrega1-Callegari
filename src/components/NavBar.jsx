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
    
    <nav className="navbar navbar-expand-lg navbar-light p-4">
            <div className="container d-flex justify-content-between align-items-center">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img className="imagen-logo" src={Logo} alt="Logo" />
                    <span className="ml-2">O F R E N D A</span>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLigth" aria-controls="navbarLigth" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" id="navbarLigth">
                    <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
                        <Categories />
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    

       
    </>
    
    );
}

export default NavBar;
