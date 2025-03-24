import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NoteForm({ categories, onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [important, setImportant] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation basique
    if (!title.trim() || !content.trim() || !categoryId) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    const newNote = {
      title,
      content,
      important,
      category: { id: parseInt(categoryId) }
    };
    
    onSubmit(newNote);
    navigate('/');
  };
  
  return (
    <div className="note-form-container">
      <h2>Créer une nouvelle note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Contenu</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Catégorie</label>
          <select
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Sélectionner une catégorie</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={important}
              onChange={(e) => setImportant(e.target.checked)}
            />
            Marquer comme important
          </label>
        </div>
        
        <div className="form-buttons">
          <button type="button" onClick={() => navigate('/')}>
            Annuler
          </button>
          <button type="submit" className="primary">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;