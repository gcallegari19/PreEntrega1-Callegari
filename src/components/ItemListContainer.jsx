import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {cid} = useParams()
    useEffect(() => {
        fetch("../data/productos.json")
            .then(response => response.json())
            .then(prods => {
                if(cid){
                    const productos = prods.filter(prod => prod.category == cid)
                    setProducts(productos)
                }else{
                    setProducts(prods)
                }
            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                <ItemList products={products} />
            </div>
        </div>
    )
}

export default ItemListContainer;
