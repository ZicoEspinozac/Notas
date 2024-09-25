import React from 'react';

const NoteCard = ({ nota, manejarBorrarNota, manejarArchivarNota, setNotaSeleccionada }) => (
  <div key={nota.id} className={`note-card ${nota.color}`}>
    <div className="note-card-header">
      <h5>{nota.nombre_nota}</h5>
      <button
        className="btn btn-icon"
        onClick={() => manejarBorrarNota(nota.id)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
    <p>{nota.descripcion_nota}</p>
    <div className="note-card-footer">
      <button
        className="btn btn-sm"
        onClick={() => setNotaSeleccionada({ id: nota.id, nombre_nota: nota.nombre_nota, descripcion_nota: nota.descripcion_nota })}
      >
        <i className="bi bi-pencil-square"></i> Editar
      </button>
      <button
        className="btn btn-sm"
        onClick={() => manejarArchivarNota(nota.id)}
      >
        <i className=  {nota.archivada ? 'bi bi-box-arrow-in-up' : 'bi bi-archive' }></i>  {nota.archivada ? 'desarchivar' : 'archivar' }
      </button>
    </div>
  </div>
);

export default NoteCard;
