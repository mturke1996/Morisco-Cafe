import React from 'react';
import './styles.css';

function CategoryCard({ category, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`category-card ${isActive ? 'active' : ''}`}
    >
      <img src={category.image} alt={category.name} className="category-icon" />
      <h3 className="category-name">{category.name}</h3>
    </div>
  );
}

export default CategoryCard;
