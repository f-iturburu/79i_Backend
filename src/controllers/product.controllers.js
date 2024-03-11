import { productos } from "../db/db.js";

export const getAllProducts = async (req,res) =>{
    // Request == Petición 
    // Response == Respuesta
    res.status(200).json(productos)
}