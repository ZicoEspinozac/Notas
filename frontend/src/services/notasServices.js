import axios from "axios";

const URL = `https://mzgpn7rm-4000.brs.devtunnels.ms/notas`;

const obtenerNotas = async () => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      throw error;
    }
};

const crearNota = async (objNota) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  try {
    const {data} = await axios.post(URL, objNota, {headers});
    return data;
  } catch (error) {
    throw error;
  }
}

const actualizarNota = async (id, objNota) => {
  const headers = {
    'Content-Type': 'application/json'
  }

  try {
    const {data} = await axios.put(`${URL}/${id}`, objNota, {headers});
    return data;
  } catch (error) {
    throw error;
  }
}

const eliminarNota = async (id) => {
  try {
    const { code } = await axios.delete(`${URL}/${id}`);
    return code;
  } catch (error) {
    throw error;
  } 
}

// Archivar o desarchivar una nota
const archivarNota = async (id) => {
  try {
    // Aquí se realiza una llamada para archivar/desarchivar la nota en función del estado actual
    const { data } = await axios.put(`${URL}/archivadas/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const obtenerNotaCategoria = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/notas_categorias/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export {
  obtenerNotas,
  actualizarNota,
  crearNota,
  eliminarNota,
  archivarNota,
  obtenerNotaCategoria
}