import express  from "express";
import { PORT } from "./config/config.js";
import ProductRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use(ProductRoutes)

app.listen(PORT, async()=>{
    console.log(`La aplicación esta escuchando el puerto ${PORT}`)
})
