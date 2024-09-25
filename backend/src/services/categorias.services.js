import { crearCategoriaModel, borrarCategoriaModel, obtenerCategoriasModel } from '../models/categorias.model.js';

export async function obtenerCategoriasServices() {
  return await obtenerCategoriasModel();
}

export async function crearCategoriaServices(nombre_categoria) {
  return await crearCategoriaModel(nombre_categoria);
}

export async function borrarCategoriaServices(categoria_id) {
  return await borrarCategoriaModel(categoria_id);
}

