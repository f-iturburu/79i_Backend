import express from "express";
import { PORT } from "./config/config.js";
import ProductRoutes from "./routes/product.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();


// Solo deja pasar las peticiones que envian un json - parsea la información
app.use(express.json()) 

// Otorga más información de las peticiones que llegan al servidor
app.use(morgan("dev"))


app.use(cors())

app.use(ProductRoutes);

app.listen(PORT, async () => {
  console.log(`Aplicación escuchando puerto ${PORT}`);
});

// Endpoint
// app.get("/", async (req,res)=>{
//     res.send("hello world")
// });
