import { prisma } from '../prisma.js';

export async function obtenerNotasModel() {
  try {
    const response = await prisma.notas.findMany();
    return response
  } catch (error) {
    throw error;
  }
}

export async function crearNotasModel(nombre_nota, descripcion_nota, categoria_id) {
  try {
    const response = await prisma.notas.create({data: {
      nombre_nota: nombre_nota, descripcion_nota: descripcion_nota
    }});
    if(response){
      console.log("categoria_id",categoria_id);
      console.log(response);
      await prisma.nota_categoria.create({data:{
        categoria_id: categoria_id, nota_id: response.id
      }})
    }
    return response;
    
  } catch (error) {
    throw error;
  }
  
}

export async function actualizarNotasModel(nombre_nota, nota_id,descripcion_nota,categoria_id) {
  try {
    const response = await prisma.notas.update({
      where: {
        id: nota_id
      },
      data:{
        nombre_nota: nombre_nota,descripcion_nota: descripcion_nota
      }
    });
    if (categoria_id > 0 ) {
      const existingNotaCategoria = await prisma.nota_categoria.findUnique({
        where: {
          nota_id_categoria_id: {
            nota_id: nota_id,
            categoria_id: categoria_id,
          }
      }})

      if (existingNotaCategoria) {
        await prisma.nota_categoria.delete({
          where: {
            nota_id_categoria_id: {
              nota_id: nota_id,
              categoria_id: categoria_id
            }
          }
        });
      }
      
      await prisma.nota_categoria.create({
          data:{
            nota_id: nota_id,
            categoria_id: categoria_id,
      }})
    }
    return response;
  } catch (error) {
    throw error;
  }
  
}

export async function borrarNotasModel(nota_id) {
  try {
    const response = await prisma.notas.delete({
      where: {
        id: nota_id
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function archivarNotaModel(nota_id) {
  try {
    const nota = await prisma.notas.findUnique({where: {
      id: nota_id
    }});
    
    const response = await prisma.notas.update({
      where: {
        id: nota_id
      },
      data:{
        archivada: !nota.archivada
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}


export async function obtenerNotasCategoriasModel(categoria_id) {
  try {
    const data = await prisma.nota_categoria.findMany({
      where: {
        categoria_id: categoria_id,
      },
    });

    const response = await Promise.all(data.map(async (nota) => {
      const notaData = await prisma.notas.findUnique({
        where: {
          id: nota.nota_id,
        },
      });
      return notaData;
    }));

    return response;
  } catch (error) {
    throw error;
  }
}