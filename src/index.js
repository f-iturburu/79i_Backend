import express  from "express";
import { PORT } from "./config/config.js";
import ProductRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors"
import "./db/db_connection.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(ProductRoutes)

app.listen(PORT, async()=>{
    console.log(`La aplicación esta escuchando el puerto ${PORT}`)
})

// ========================================================================================================

// Tarea 11/03/2024

// Crear el endpoint getProductByCategory (ruta y controlador) y debe devolver los productos con la categoria recibida por parametro.
// Crear el endpoint sortProductByPrice que debe recibir un parametro que puede adoptar los valores de "asc" o "desc", 
// y debe devolver los productos ordenados por precio.

// Debe tener en consideración casos de error, productos no encontrados o parametro recibido incorrecto. 

// ========================================================================================================

//Tarea 13/03/2024

//Refactorizar los dos endpoints de la tarea de la clase anterior (getProductByCategory, sortProductByPrice) utilizando metodos de mongoose.