import { Router } from "express";
import { getAllProducts, getProductById, getProductsByCategory, sortProductsByPrice } from "../controllers/product.controllers.js";

const router = Router();

router.get("/products",getAllProducts)
router.get("/product/:id",getProductById)
router.get("/products/category/:category",getProductsByCategory)
router.get("/products/sort/:sort",sortProductsByPrice)

export default router