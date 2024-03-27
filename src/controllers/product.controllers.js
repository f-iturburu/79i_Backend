import { products } from "../db/db.js";

export const getAllProducts = async (req,res) => {
    res.status(200).json(products);
};

export const getProductById = async (req,res) => {
    const { id } = req.params;
    const productFound = products.find((prod) => prod.id===id);
    if(productFound) {
        res.status(200).json(productFound)
    } else {
        res.status(404).json({message: "Producto/id no encontrado"})
    };
};

export const getProductsByCategory = async (req,res) => {
    const { category } = req.params;
    const productsFound = products.filter((prod) => prod.category===category);
    console.log(productsFound)
    if(productsFound) {
        res.status(200).json(productsFound)
    } else {
        res.status(404).json({message: "Producto/categoria no encontrado"})
    }
};

export const sortProductsByPrice = async(req,res) => {
    const { sort } = req.params;
    if(sort==="asc") {
        const productsSorted = products.sort((a,b) => a.price-b.price)
        res.status(200).json(productsSorted)
    } else if(sort==="desc") {
        const productsSorted = products.sort((a,b) => b.price-a.price)
        res.status(200).json(productsSorted)
    } else {
        res.status(404).json({message: "parámetro ausente o incorrecto, 'sort' debe ser 'asc' o 'desc'"})
    }
}