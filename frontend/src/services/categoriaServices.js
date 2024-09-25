import axios from  "axios";

const URL =`https://mzgpn7rm-4000.brs.devtunnels.ms/categorias`;

const obtenerCategorias = async () => {
	try {
		const {data} = await axios.get(URL);
		return data;
	} catch (error) {
		throw error;
	}
};

const crearCategoria = async (objCategoria) => {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const {data} = await axios.post(URL, objCategoria, { headers });
    return data ;
  } catch (error) {
    throw error;
  }
}

const BorrarCategoria = async (id) => {
  try {
    const {code} = await axios.delete(`${URL}/${id}`);
    return code ;
  } catch (error) {
    throw error;
  }
} 

export { obtenerCategorias, crearCategoria, BorrarCategoria }