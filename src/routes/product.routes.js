import { Router } from "express";
import { getAllProducts } from "../controllers/product.controllers.js";

const router = Router()

router.get("/productos", getAllProducts)

export default router