import { productos } from "../db/db.js";

export const getAllProducts = async (req, res) => {
  // Request == Petición
  // Response == Respuesta
  res.status(200).json(productos);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const productFound = productos.find(product => product.id === id)
 
  if (productFound) {
      return res.status(200).json(productFound)
  }

  res.status(404).json({message: "No hemos podido encontrar el producto solicitado"})
};
