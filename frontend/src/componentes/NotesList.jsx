import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notas, manejarBorrarNota, manejarArchivarNota, setNotaSeleccionada, archivadas }) => {
  const notasFiltradas = notas.filter(nota => nota.archivada === archivadas);

  return (
    <section className={`notes-grid ${archivadas ? 'notes-archived' : ''}`}>
      <h2>{archivadas ? 'Archivadas' : 'Notas Activas'}</h2>
      {notasFiltradas.length > 0 ? (
        notasFiltradas.map((nota) => (
          <NoteCard
            key={nota.id}
            nota={nota}
            manejarBorrarNota={manejarBorrarNota}
            manejarArchivarNota={manejarArchivarNota}
            setNotaSeleccionada={setNotaSeleccionada}
          />
        ))
      ) : (
        <p>No hay notas {archivadas ? 'archivadas' : 'activas'} disponibles.</p>
      )}
    </section>
  );
};

export default NotesList;