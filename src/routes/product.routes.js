import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductByCategory,
  getProductByPrice,
  createProduct
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/products", getAllProducts);
router.get("/product/:categoria",getProductByCategory)
router.get("/product/:id", getProductById);
router.get("/product/:orden",getProductByPrice)
router.post('/product',createProduct)

export default router;
