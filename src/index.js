import app from './app.js'
import { PORT } from './config/config.js'
import './database/database.js'
async function main() {
	await app.listen(PORT, async () => {
		console.log(`La aplicación esta escuchando el puerto ${PORT}`)
	})
}
main()

// Crear el endpoint getProductByCategory (ruta y controlador) y debe devolver los productos con la categoria recibida por parametro.
// Crear el endpoint sortProductByPrice que debe recibir un parametro que puede adoptar los valores de "asc" o "desc",
// y debe devolver los productos ordenados por precio.

// Debe tener en consideración casos de error, productos no encontrados o parametro recibido incorrecto.
// ========================================================================================================

//Tarea 13/03/2024

//Refactorizar los dos endpoints de la tarea de la clase anterior (getProductByCategory, sortProductByPrice) utilizando metodos de mongoose.
