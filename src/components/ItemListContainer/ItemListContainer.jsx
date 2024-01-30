import React from 'react';
import "../../assets/logo.png";
import "../../styles/ItemListContainer.css";

const ItemListContainer = ({mensaje}) => {
    return (
        <div>
            <p>{mensaje}</p>
        </div>
    );
}

export default ItemListContainer;
