import { crearNotasModel, obtenerNotasModel, actualizarNotasModel, borrarNotasModel, archivarNotaModel, obtenerNotasCategoriasModel} from '../models/notas.model.js'

export async function obtenerNotasServices() {
  return await obtenerNotasModel();
}

export async function crearNotasServices(nombre_nota,descripcion_nota,categoria_id) {
    return await crearNotasModel(nombre_nota,descripcion_nota,categoria_id);
  }

export async function actualizarNotaServices(nombre_nota,nota_id,descripcion_nota,categoria_id) {
    return await actualizarNotasModel(nombre_nota,nota_id,descripcion_nota,categoria_id);
  }

export async function borrarNotaServices(nota_id) {
  return await borrarNotasModel(nota_id);
}
  
export async function archivarNotaServices(nota_id) {
  return await archivarNotaModel(nota_id);
}

export async function obtenerNotasCategoriasServices(categoria_id) {
  return await obtenerNotasCategoriasModel(categoria_id);
}

