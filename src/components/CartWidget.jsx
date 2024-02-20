import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "../styles/CartWidget.css"
import { useState } from 'react';
const CartWidget = () => {
    return (
      <li>
          <button className="carritoBtn text-black px-4 py-2 rounded flex items-center">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>0</span>
          </button>
      </li>
    );
  };

export default CartWidget;
