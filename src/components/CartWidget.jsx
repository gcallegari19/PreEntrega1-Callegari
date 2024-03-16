import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "../styles/CartWidget.css"
import { useCarritoContext } from "../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const { getItemQuantity } = useCarritoContext();

    return (
      <li>
        <Link to={'/cart'}>
          <button className="carritoBtn bg-[#e8dad7] text-black px-2 py-1 rounded flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            <span>{getItemQuantity()}</span>
          </button>
        </Link>
      </li>
    )
}

export default CartWidget;
