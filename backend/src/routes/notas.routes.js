import { Router } from 'express';
import { obtenerNotasController, crearNotasController, actualizarNotaController, borrarNotaController, archivarNotaController, obtenerNotasCategoriasController} from '../controllers/notas.controller.js';


const notasRouter = Router();

notasRouter.route("/notas").get(obtenerNotasController).post(crearNotasController);
notasRouter.route("/notas/:id").put(actualizarNotaController).delete(borrarNotaController);
notasRouter.route("/notas/archivadas/:id").put(archivarNotaController);
notasRouter.route("/notas/notas_categorias/:id").get(obtenerNotasCategoriasController);


export default notasRouter;