import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductByCategory,
  getProductByPrice,
  createProduct
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/productos", getAllProducts);
router.get("/productosCategory/:categoria",getProductByCategory)
router.get("/producto/:id", getProductById);
router.get("/productos/:orden",getProductByPrice)
router.post('/product',createProduct)

export default router;
