import { products } from "../db/db.js";

export const getAllProducts = async (req,res) => {
    res.status(200).json(products)
}