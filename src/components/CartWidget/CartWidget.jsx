import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import "../styles/CartWidget.css"
import { useState } from 'react';
const CartWidget = () => {
    const itemCount = 2; // Número hardcodeado
  
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping}  />
        <span className="position-absolute top-2 start-200 badge badge-light rounded-pill bg-danger">{itemCount}</span>
      </div>
    );
  };

export default CartWidget
