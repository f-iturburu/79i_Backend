import { Router } from 'express'
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductByCategory,
	getProductById,
	getProductsSortedByPrice,
} from '../controllers/product.controllers.js'

const router = Router()

router.get('/products', getAllProducts)
router.post('/products', createProduct)
router.get('/product/:id', getProductById)
router.delete('/product/delete/:id', deleteProduct)
router.get('/products/category/:category', getProductByCategory)
router.get('/products/price/:sortOrder', getProductsSortedByPrice)

export default router
