import { useState } from 'react';
import { obtenerNotas, crearNota, actualizarNota, eliminarNota, archivarNota, obtenerNotaCategoria } from '../services/notasServices';

const useNotas = () => {
  const [notas, setNotas] = useState([]);
  const [notasArchivadas, setNotasArchivadas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState({ nombre_nota: '', descripcion_nota: '', categoria_id: 0 });
  const [notaSeleccionada, setNotaSeleccionada] = useState(null);


  const cargarDatos = async (id = 0) => {
    try {
      let todasLasNotas = [];
      if (id > 0) {
        todasLasNotas = await obtenerNotaCategoria(id);
        setNotas(todasLasNotas.data);
      } else {
        todasLasNotas = await obtenerNotas();
        setNotas(todasLasNotas.data.filter(nota => !nota.archivada));
      }
      setNotasArchivadas(todasLasNotas.data.filter(nota => nota.archivada));
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  };

  const manejarCrearNota = async () => {
    try {
      
      await crearNota(nuevaNota);
      setNuevaNota({ nombre_nota: '', descripcion_nota: '', categoria_id: 0 });
      cargarDatos();
    } catch (error) {
      console.error('Error al crear nota:', error);
    }
  };

  const manejarActualizarNota = async () => {
    try {
      console.log("#####################");
      
      console.log(notaSeleccionada);
      
      await actualizarNota(notaSeleccionada.id, notaSeleccionada);
      setNotaSeleccionada(null);
      cargarDatos();
    } catch (error) {
      console.error('Error al actualizar nota:', error);
    }
  };

  const manejarBorrarNota = async (id) => {
    try {
      await eliminarNota(id);
      cargarDatos();
    } catch (error) {
      console.error('Error al borrar nota:', error);
    }
  };

  const manejarArchivarNota = async (id) => {
    try {
      await archivarNota(id);
      cargarDatos();
    } catch (error) {
      console.error('Error al archivar nota:', error);
    }
  };

  return {
    notas,
    nuevaNota,
    setNuevaNota,
    notaSeleccionada,
    setNotaSeleccionada,
    notasArchivadas,
    cargarDatos,
    manejarCrearNota,
    manejarActualizarNota,
    manejarBorrarNota,
    manejarArchivarNota,
  };
};

export default useNotas;