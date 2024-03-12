import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/productos", getAllProducts);
router.get("/producto/:id", getProductById);

export default router;
