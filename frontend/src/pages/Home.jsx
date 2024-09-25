import React, { useState, useEffect } from 'react';
import useNotas from '../hooks/useNotas';
import useCategorias from '../hooks/useCategorias';
import Sidebar from '../componentes/Sidebar';
import CategoriesFilter from '../componentes/CategoriesFilter';
import NoteForm from '../componentes/NoteForm';
import NotesList from '../componentes/NotesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const Home = () => {
  const { notas, nuevaNota,notaSeleccionada, setNotaSeleccionada, setNuevaNota, notasArchivadas, cargarDatos, manejarCrearNota, manejarActualizarNota, manejarBorrarNota, manejarArchivarNota } = useNotas();
  const { categorias, nuevaCategoria, setNuevaCategoria, manejarCrearCategoria, manejarBorrarCategoria, cargarCategorias } = useCategorias();
  const [filtroCategoria, setFiltroCategoria] = useState(null);

  useEffect(() => {
    cargarDatos();
    cargarCategorias();
  }, []);

  const manejarFiltrarPorCategoria = async (categoriaId) => {
    try {
      setFiltroCategoria(categoriaId);
      cargarDatos(categoriaId);
    } catch (error) {
      console.log('Error al filtrar por categoría:', error);
    }
  };

  const manejarBorrarNotaYRedirigir = (notaId) => {
    manejarBorrarNota(notaId);
    setFiltroCategoria(null); // Redirigir a "Todos"
    cargarDatos();
  };

  const manejarArchivarNotaYRedirigir = (notaId) => {
    manejarArchivarNota(notaId);
    setFiltroCategoria(null); // Redirigir a "Todos"
    cargarDatos();
  };

  return (
    <div className="app-container">
      <Sidebar
        categorias={categorias}
        nuevaCategoria={nuevaCategoria}
        setNuevaCategoria={setNuevaCategoria}
        manejarCrearCategoria={manejarCrearCategoria}
        manejarBorrarCategoria={manejarBorrarCategoria}
      />

      <main className="main-content">
        <header className="header d-flex justify-content-between align-items-center">
          <h1>Notas</h1>
          <div className="search-bar">
            <input type="text" className="form-control" placeholder="Buscar..." />
          </div>
        </header>

        <CategoriesFilter
          categorias={categorias}
          filtroCategoria={filtroCategoria}
          manejarFiltrarPorCategoria={manejarFiltrarPorCategoria}
        />

        <NotesList
          notas={notas}
          manejarBorrarNota={manejarBorrarNota}
          manejarArchivarNota={manejarArchivarNota}
          setNotaSeleccionada={setNotaSeleccionada}
          archivadas={false}
        />

        <NoteForm
          notaSeleccionada={notaSeleccionada}
          nuevaNota={nuevaNota}
          categorias={categorias}
          setNotaSeleccionada={setNotaSeleccionada}
          setNuevaNota={setNuevaNota}
          manejarActualizarNota={manejarActualizarNota}
          manejarCrearNota={manejarCrearNota}
        />

      <NotesList
          notas={notasArchivadas}
          manejarBorrarNota={manejarBorrarNotaYRedirigir}
          manejarArchivarNota={manejarArchivarNotaYRedirigir}
          setNotaSeleccionada={setNotaSeleccionada}
          archivadas={true}
        />
      </main>
    </div>
  );
};

export default Home;