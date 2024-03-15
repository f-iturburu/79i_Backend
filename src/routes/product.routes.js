import { Router } from 'express'
import {
	getAllProducts,
	getProductByCategory,
	getProductById,
	getProductByPrice,
} from '../controllers/product.controllers.js'

const router = Router()

router.get('/products', getAllProducts)
router.get('/product/:id', getProductById)
router.get('/products/category/:category', getProductByCategory)
router.get('/products/price/:sortOrder', getProductByPrice)

export default router
