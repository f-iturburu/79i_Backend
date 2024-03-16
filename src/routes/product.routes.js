import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  getProductByCategory,
  sortProductByPrice,
} from '../controllers/product.controllers.js';

const router = Router();

router.get('/productos', getAllProducts);
router.get('/producto/:id', getProductById);
router.get('/productos/categoria/:categoria', getProductByCategory);
router.get('/productos/sort/:order', sortProductByPrice);

export default router;
