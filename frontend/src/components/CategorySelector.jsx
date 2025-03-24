import React from 'react';

function CategorySelector({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-selector">
      <button
        className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
        onClick={() => onCategoryChange(null)}
      >
        Toutes les notes
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          style={{ 
            backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
            color: selectedCategory === category.id ? 'white' : 'inherit',
            borderColor: category.color
          }}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategorySelector;