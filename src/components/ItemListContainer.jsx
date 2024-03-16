import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { getProducts } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {cid} = useParams()
    useEffect(() => {
        //fetch('../data/productos.json')
        //    .then(response => response.json())
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (cid) {
                    const productosFiltrados = productos.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(productos)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                <ItemList products={products} plantilla={"Item"}/>
            </div>
        </div>
    )
}

export default ItemListContainer;
