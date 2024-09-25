import React from 'react';

const CategoriesFilter = ({ categorias, filtroCategoria, manejarFiltrarPorCategoria }) => (
  <section className="categories-filter mb-4">
    <button
      className={`btn category-btn ${!filtroCategoria ? 'active' : ''}`}
      onClick={() => manejarFiltrarPorCategoria(null)}
    >
      Todas
    </button>
    {categorias.map((categoria) => (
      <button
        key={categoria.id}
        className={`btn category-btn ${filtroCategoria === categoria.id ? 'active' : ''}`}
        onClick={() => manejarFiltrarPorCategoria(categoria.id)}
      >
        {categoria.nombre_categoria}
      </button>
    ))}
  </section>
);

export default CategoriesFilter;
