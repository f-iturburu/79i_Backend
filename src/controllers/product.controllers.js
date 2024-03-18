import { productos } from "../db/db.js";
import Product from "../models/product.model.js"

//trayendo todos los productos
export const getAllProducts = async (req, res) => {
  // Request == Petición
  // Response == Respuesta
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//creando productos
export const createProduct = async(req,res)=>{
  const {nombre,categoria,precio,imagen} = req.body
  try {
    const product = await Product.create({
      nombre:nombre,
      categoria:categoria,
      precio:precio,
      imagen:imagen
    })
    res.status(201).json({message:"el objeto fue creado"})
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

//por id
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const productFound = await Product.findById(id);

    if (!productFound) {
      return res.status(404).json({ message: "No hemos podido encontrar el producto solicitado" });
    }

    res.status(200).json(productFound);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }


  // const { id } = req.params;
  // const productFound = productos.find(product => product.id === id)
 
  // if (productFound) {
  //     return res.status(200).json(productFound)
  // }

  // res.status(404).json({message: "No hemos podido encontrar el producto solicitado"})
};

//aca buscamos por categoria
export const getProductByCategory = async(req,res)=>{
  const {categoria} = req.params;
  // const productMatch = productos.filter(p => p.categoria ===  categoria)
  // if(productMatch.length >0){
  //   return res.status(200).json(productMatch)
  // }
  // res.status(404).json({message:"no hemos encontrado productos con esta categoria"})
  
  try {
    const productos = await Product.find({ categoria: categoria });
    res.json(productos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//por ascendente o descendente segun el precio
export const getProductByPrice = async(req,res)=>{
  const {orden} = req.params;
  // if(orden === "asc"){
  //     const productosAsc = productos.slice().sort((a,b)=>
  //     a.precio - b.precio)
  //     return res.status(200).json(productosAsc)
  // }else if(orden === "desc") {
  //   const productosDesc = productos.slice().sort((a,b)=>
  //   b.precio - a.precio)
  //   return res.status(200).json(productosDesc)
  // }
  // res.status(404).json({message:"el parametro de orden no es correcto porfavor pruebe con asc o desc"})
 
  try {
    if (orden === 'asc' || orden === 'desc') {
      const productos = await Product.find().sort({ precio: orden });
      res.json(productos);
    } else {
      throw new Error('Orden no válida. Debe ser "asc" o "desc".');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
