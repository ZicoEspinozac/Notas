import express, { json } from "express";
import notasRouter from "./routes/notas.routes.js";
import categoriaRouter from "./routes/categorias.routes.js";
import cors from "cors"; 


const app = express();
const PORT = 4000;

app.use(cors())
app.use(json())

app.use('/ping', (_, res) => {
 res.send('pong');
});

app.use(notasRouter);
app.use(categoriaRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})