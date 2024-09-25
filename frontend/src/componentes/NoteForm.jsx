import React from 'react';

const NoteForm = ({ notaSeleccionada, nuevaNota, categorias, setNotaSeleccionada, setNuevaNota, manejarActualizarNota, manejarCrearNota }) => {
  const manejarSubmit = (e) => {
    e.preventDefault();
    if (notaSeleccionada) {
      manejarActualizarNota(notaSeleccionada.id, nuevaNota);
    } else {
      manejarCrearNota(nuevaNota);
    }
    setNuevaNota({ nombre_nota: '', descripcion_nota: '', categoria_id: '' });
    setNotaSeleccionada(null);
  };

  return (
    <form className="create-note-section" onSubmit={manejarSubmit}>
      <h3>{notaSeleccionada ? 'Editar Nota' : 'Crear Nota'}</h3>
      <input
        type="text"
        placeholder="Título"
        value={nuevaNota.nombre_nota}
        onChange={(e) => setNuevaNota({ ...nuevaNota, nombre_nota: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={nuevaNota.descripcion_nota}
        onChange={(e) => setNuevaNota({ ...nuevaNota, descripcion_nota: e.target.value })}
      />
      <select
        value={nuevaNota.categoria_id}
        onChange={(e) => setNuevaNota({ ...nuevaNota, categoria_id: e.target.value })}
      >
        <option value="">Seleccionar Categoría</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>
            {categoria.nombre_categoria}
          </option>
        ))}
      </select>
      <button type="submit">{notaSeleccionada ? 'Actualizar' : 'Crear'}</button>
    </form>
  );
};

export default NoteForm;
