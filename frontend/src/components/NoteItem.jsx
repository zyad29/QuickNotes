import React from 'react';

function NoteItem({ note, categoryColor, onDelete }) {
  // Formatage de la date
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="note-item" style={{ borderLeftColor: categoryColor }}>
      <div className="note-header">
        <h3>{note.title} {note.important && <span className="important-marker">⭐</span>}</h3>
        <div className="note-actions">
          <button className="delete-btn" onClick={() => onDelete(note.id)}>🗑️</button>
        </div>
      </div>
      
      <div className="note-content">
        <p>{note.content}</p>
      </div>
      
      <div className="note-footer">
        <span className="category-name" style={{ backgroundColor: categoryColor }}>
          {note.category ? note.category.name : 'Sans catégorie'}
        </span>
        <span className="note-date">{formatDate(note.createdAt)}</span>
      </div>
    </div>
  );
}

export default NoteItem;