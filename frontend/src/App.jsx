import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import CategorySelector from './components/CategorySelector';

const API_URL = "http://localhost:8081/api";

function App() {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showImportantOnly, setShowImportantOnly] = useState(false);
  
  // Charger les notes et les catégories au démarrage
  useEffect(() => {
    fetchNotes();
    fetchCategories();
  }, []);
  
  // Charger les notes filtrées lorsque la catégorie ou le filtre important change
  useEffect(() => {
    if (showImportantOnly) {
      fetchImportantNotes();
    } else if (selectedCategory) {
      fetchNotesByCategory(selectedCategory);
    } else {
      fetchNotes();
    }
  }, [selectedCategory, showImportantOnly]);
  
  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des notes:", error);
    }
  };
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des catégories:", error);
    }
  };
  
  const fetchNotesByCategory = async (categoryId) => {
    try {
      const response = await axios.get(`${API_URL}/notes/category/${categoryId}`);
      setNotes(response.data);
    } catch (error) {
      console.error(`Erreur lors du chargement des notes pour la catégorie ${categoryId}:`, error);
    }
  };
  
  const fetchImportantNotes = async () => {
    try {
      const response = await axios.get(`${API_URL}/notes/important`);
      setNotes(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des notes importantes:", error);
    }
  };
  
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowImportantOnly(false);
  };
  
  const toggleImportantFilter = () => {
    setShowImportantOnly(!showImportantOnly);
    setSelectedCategory(null);
  };
  
  const addNote = async (newNote) => {
    try {
      const response = await axios.post(`${API_URL}/notes`, newNote);
      // Rafraîchir la liste des notes après ajout
      if (showImportantOnly) {
        fetchImportantNotes();
      } else if (selectedCategory) {
        fetchNotesByCategory(selectedCategory);
      } else {
        fetchNotes();
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout d'une note:", error);
    }
  };
  
  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${API_URL}/notes/${noteId}`);
      // Rafraîchir la liste des notes après suppression
      setNotes(notes.filter(note => note.id !== noteId));
    } catch (error) {
      console.error(`Erreur lors de la suppression de la note ${noteId}:`, error);
    }
  };
  
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>QuickNotes</h1>
          <nav>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/new" className="nav-link">Nouvelle Note</Link>
          </nav>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <>
                <div className="filters-container">
                  <CategorySelector 
                    categories={categories} 
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                  <button 
                    className={`important-filter ${showImportantOnly ? 'active' : ''}`}
                    onClick={toggleImportantFilter}
                  >
                    ⭐ Important uniquement
                  </button>
                </div>
                <NoteList 
                  notes={notes} 
                  categories={categories}
                  onDelete={deleteNote} 
                />
              </>
            } />
            <Route path="/new" element={
              <NoteForm 
                categories={categories} 
                onSubmit={addNote} 
              />
            } />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>© 2025 QuickNotes App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;