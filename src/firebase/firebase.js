// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNEN05fsmLJrIlWZGJcFzeu2Rmy5ZTAi8",
  authDomain: "tienda-ofrenda.firebaseapp.com",
  projectId: "tienda-ofrenda",
  storageBucket: "tienda-ofrenda.appspot.com",
  messagingSenderId: "1037071220752",
  appId: "1:1037071220752:web:6da36fe74ed2c9297eca95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/

//Crear productos
const prods = [
    {
        "title": "Vaso Fernetero",
        "price": 7000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/1.png?alt=media&token=2d5fb7b5-2784-4bbb-a2fe-eb907e0f7974",
        "category": "fernetero"
    },
    {
        "title": "Vaso Tere",
        "price": 5000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/2.png?alt=media&token=83a86e98-8dd2-498c-ac04-38faa92c10a5",
        "category": "mate"
    },
    {
        "title": "Despojador de Joyas",
        "price": 3500,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/3.png?alt=media&token=7b2325a8-e3e4-4462-a6bc-9063c85fa4a1",
        "category": "deco"
    },
    {
        "title": "Matecito de Puntitos",
        "price": 2500,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/4.png?alt=media&token=b8260cf0-5b1f-40d9-b813-9d2a3529ee03",
        "category": "mate"
    },
    {
        "title": "Gato de la fortuna",
        "price": 10000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/5.png?alt=media&token=f1055eda-c969-4206-bb97-803ec7a57722",
        "category": "deco"
    },
    {
        "title": "Vaso Tere a Lunares",
        "price": 5000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/6.png?alt=media&token=f44b32e1-20d8-41d2-9dc9-2cbee3dcaf09",
        "category": "mate"
    },
    {
        "title": "Vaso Fernetero a Puntitos",
        "price": 7000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/7.png?alt=media&token=93063795-94df-48d2-94a1-e6838c4feb21",
        "category": "fernetero"
    },
    {
        "title": "Matecito Print",
        "price": 2500,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/8.png?alt=media&token=d390b2ab-5ca8-4404-82c3-436ad4ca1ce7",
        "category": "mate"
    },
    {
        "title": "Vaso Fernetero Margaritas",
        "price": 7000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/9.png?alt=media&token=9aedbe9e-b523-476b-b270-700517cc6d43",
        "category":"fernetero"
    },
    {
        "title": "Matecito a Lunares",
        "price": 2500,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/10.png?alt=media&token=65819fd8-3270-45a1-8f33-b1d3b651522e",
        "category": "mate"
    },
    {
        "title": "Vaso Fernetero Print Rosa",
        "price": 7000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/11.png?alt=media&token=6b23a1d0-2bb2-4a87-a1d7-b49b8298294e",
        "category":"fernetero"
    },
    {
        "title": "Gatito de la Fortuna",
        "price": 3000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/12.png?alt=media&token=f8d5085c-e24c-4b2e-b9cf-7dad8a458e41",
        "category": "deco"
    },
    {
        "title": "Vaso Tere Orgullo",
        "price": 5000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/13.png?alt=media&token=15cc283d-fd04-4b54-a4c3-9dd487546afa",
        "category": "mate"
    },
    {
        "title": "Vaso Fernetero Ella",
        "price": 7000,
        "stock": 5,
        "img": "https://firebasestorage.googleapis.com/v0/b/tienda-ofrenda.appspot.com/o/14.png?alt=media&token=0112e302-e249-49ee-bac3-abf301adbb70",
        "category": "fernetero"
    }
]

export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}
// createProducts()

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto
export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto
export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}
