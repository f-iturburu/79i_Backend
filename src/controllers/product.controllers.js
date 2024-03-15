import { productos } from '../db/db.js'

export const getAllProducts = async (req, res) => {
	// Request == Petición
	// Response == Respuesta
	res.status(200).json(productos)
}

export const getProductById = async (req, res) => {
	const { id } = req.params
	const productFound = productos.find((product) => product.id === id)

	if (productFound) {
		return res.status(200).json(productFound)
	}

	res
		.status(404)
		.json({ message: 'No hemos podido encontrar el producto solicitado' })
}

export const getProductByCategory = async (req, res) => {
	const { category } = req.params
	const filterProducts = productos.filter(
		(producto) =>
			producto.categoria.toLowerCase() === category.toString().toLowerCase()
	)

	if (!filterProducts || filterProducts.length === 0) {
		return res
			.status(404)
			.json({ messagge: 'no hay productos en esa categoria' })
	}
	return res.status(200).json(filterProducts)
}

export const getProductByPrice = async (req, res) => {
	const { sortOrder } = req.params
	console.log(sortOrder)
	let sortedProducts = null

	if (sortOrder === 'asc') {
		sortedProducts = productos.sort((a, b) => a.precio - b.precio)
	}
	if (sortOrder === 'desc') {
		sortedProducts = productos.sort((a, b) => b.precio - a.precio)
	}

	if (sortOrder !== 'asc' && sortOrder !== 'desc') {
		return res.status(400).json({ messagge: 'el filtro es invalido' })
	}
	return res.status(200).json(sortedProducts)
}
