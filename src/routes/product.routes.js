import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductByCategory,
  getProductByPrice
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/productos", getAllProducts);
router.get("/productosCategory/:categoria",getProductByCategory)
router.get("/producto/:id", getProductById);
router.get("/productos/:orden",getProductByPrice)

export default router;
