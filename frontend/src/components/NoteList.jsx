import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, categories, onDelete }) {
  if (notes.length === 0) {
    return (
      <div className="empty-list">
        <p>Aucune note disponible.</p>
      </div>
    );
  }

  return (
    <div className="notes-container">
      {notes.map(note => (
        <NoteItem 
          key={note.id} 
          note={note} 
          categoryColor={note.category ? categories.find(c => c.id === note.category.id)?.color : '#CCCCCC'}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;