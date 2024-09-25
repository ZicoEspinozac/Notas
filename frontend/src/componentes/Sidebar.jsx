import React from 'react';

const Sidebar = ({ categorias, nuevaCategoria, setNuevaCategoria, manejarCrearCategoria, manejarBorrarCategoria }) => (
  <aside className="sidebar">
    <h3>Categorías</h3>
    <ul className="list-group">
      {categorias.length > 0 ? (
        categorias.map((categoria) => (
          <li key={categoria.id} className="list-group-item d-flex justify-content-between align-items-center">
            {categoria.nombre_categoria}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => manejarBorrarCategoria(categoria.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))
      ) : (
        <li className="list-group-item">No hay categorías disponibles</li>
      )}
    </ul>
    <div className="mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Nueva Categoría"
        value={nuevaCategoria.nombre_categoria}
        onChange={(e) => setNuevaCategoria({ ...nuevaCategoria, nombre_categoria: e.target.value })}
      />
      <button className="btn btn-outline-success mt-2 w-100" onClick={manejarCrearCategoria}>
        Crear
      </button>
    </div>
  </aside>
);

export default Sidebar;
