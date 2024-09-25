import {obtenerCategoriasServices, crearCategoriaServices, borrarCategoriaServices } from "../services/categorias.services.js";
import { serialize } from "../helpers/util.js";

export async function obtenerCategoriasController(_, res) {
  try {
    const categoria = await obtenerCategoriasServices();
    
    if (!categoria) {
      throw new Error("No hay categorias");
    }
    serialize(res, categoria, 200);
  } catch (error) {
    serialize(res, error.message, 400);
  }
}

export async function crearCategoriaController(req, res) {
  try {
    // dataValidation(req.body, categoriaSchema);
    const { nombre_categoria } = req.body;

    if(!nombre_categoria || nombre_categoria == "") {
      throw new Error('El campo nombre_categoria es requerido');
    }

    const categoria = await crearCategoriaServices(nombre_categoria);
    serialize(res, categoria, 201)
  } catch (error) {
    serialize(res, error.message, 400)
  }
}

export async function borrarCategoriaController(req, res) {
  try {
      const id = req.params.id;

      if(Number(id)<= 0) {
        throw new Error('id es requerido');
      }

      const categoria = await borrarCategoriaServices(Number(id));
      serialize(res, categoria, 204);
    } catch (error) {
      serialize(res, error.message, 400);
    }
}
