import { obtenerNotasServices, crearNotasServices, actualizarNotaServices, borrarNotaServices, archivarNotaServices, obtenerNotasCategoriasServices } from '../services/notas.services.js'
import { serialize } from '../helpers/util.js';


export async function obtenerNotasController(_, res) {
  try {
    const nota = await obtenerNotasServices();

    if (nota.length === 0) {
      serialize(res, 'No hay notas', 200);
    } else {
      serialize(res, nota, 200);
    }
  } catch (error) {
    serialize(res, error.message, 400);
  }
}

export async function crearNotasController(req, res) {
    try {
        const { nombre_nota, descripcion_nota, categoria_id} = req.body;
        
        if (!nombre_nota || !descripcion_nota || !categoria_id) {
          throw new Error('Faltan datos obligatorios');
        }
        const nota = await crearNotasServices(nombre_nota,descripcion_nota, Number(categoria_id));
        serialize(res, nota, 201);
      } catch (error) {
        serialize(res, error.message, 400);
      }
}

export async function actualizarNotaController(req, res) {
  try {
      const id = req.params.id;
      const { nombre_nota, descripcion_nota, categoria_id } = req.body;

      if (!nombre_nota || !descripcion_nota || !categoria_id) {
        throw new Error('Faltan datos obligatorios');
      }
      const nota = await actualizarNotaServices(nombre_nota, Number(id),descripcion_nota, Number(categoria_id));
      serialize(res, nota, 201);
    } catch (error) {
      serialize(res, error.message, 400);
    }
}

export async function borrarNotaController(req, res) {
  try {
      const id = req.params.id;

      if (!id) {
        throw new Error('Faltan datos obligatorios');
      }
      const nota = await borrarNotaServices(Number(id));
      serialize(res, nota, 204);
    } catch (error) {
      serialize(res, error.message, 400);
    }
}

export async function archivarNotaController(req, res) {
  try {
      const id = req.params.id;

      if (!id) {
        throw new Error('Faltan datos obligatorios');
      }
      const nota = await archivarNotaServices(Number(id));
      serialize(res, nota, 201);
    } catch (error) {
      serialize(res, error.message, 400);
    }
}

// obtenerNotasCategoriasController

export async function obtenerNotasCategoriasController(req, res) {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error('Faltan datos obligatorios');
    }
    const nota = await obtenerNotasCategoriasServices(Number(id));
    serialize(res, nota, 200);
  } catch (error) {
    serialize(res, error.message, 400
    );
  }
}
