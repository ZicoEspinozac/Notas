import { Router } from "express"
import { crearCategoriaController, borrarCategoriaController, obtenerCategoriasController} from "../controllers/categorias.controller.js"

const categoriaRouter = Router();

categoriaRouter.route("/categorias").get(obtenerCategoriasController).post(crearCategoriaController)
categoriaRouter.delete("/categorias/:id", borrarCategoriaController);

export default categoriaRouter;