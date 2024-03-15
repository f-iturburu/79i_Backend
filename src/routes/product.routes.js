import { Router } from 'express'
import {
	getAllProducts,
	getProductByCategory,
	getProductById,
	getProductByPrice,
} from '../controllers/product.controllers.js'

const router = Router()

router.get('/productos', getAllProducts)
router.get('/producto/:id', getProductById)
router.get('/productos/category/:category', getProductByCategory)
router.get('/productos/price/:sortOrder', getProductByPrice)

export default router
