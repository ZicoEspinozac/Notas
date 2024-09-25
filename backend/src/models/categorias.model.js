import { prisma } from '../prisma.js';

export async function obtenerCategoriasModel() {
  try {
    const response = await prisma.categorias.findMany();
    return response
  } catch (error) {
    throw error;
  }
}

export async function crearCategoriaModel(nombre_categoria) {
  try {
    const response = await prisma.categorias.create({data: {
      nombre_categoria: nombre_categoria
    }});
    return response;
  } catch (error) {
    throw error;
  }
  
}

export async function borrarCategoriaModel(categoria_id) {
  try {
    const response = await prisma.categorias.delete({
      where: {
        id: categoria_id
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}