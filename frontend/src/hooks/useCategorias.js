import { useState, useEffect } from 'react';
import { obtenerCategorias, crearCategoria, BorrarCategoria } from '../services/categoriaServices';

const useCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState({ nombre_categoria: '' });

  const cargarCategorias = async () => {
    try {
      const categoriasData = await obtenerCategorias();
      setCategorias(categoriasData.data);
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  };

  const manejarCrearCategoria = async () => {
    if (!nuevaCategoria.nombre_categoria) {
      alert('Debe ingresar el nombre de la categoría.');
      return;
    }
    try {
      await crearCategoria(nuevaCategoria);
      setNuevaCategoria({ nombre_categoria: '' });
      cargarCategorias();
    } catch (error) {
      console.error('Error al crear categoría:', error);
    }
  };

  const manejarBorrarCategoria = async (id) => {
    try {
      await BorrarCategoria(id);
      cargarCategorias();
    } catch (error) {
      console.error('Error al borrar categoría:', error);
    }
  };

  return {
    categorias,
    nuevaCategoria,
    setNuevaCategoria,
    manejarCrearCategoria,
    manejarBorrarCategoria,
    cargarCategorias,
  };
};

export default useCategorias;
