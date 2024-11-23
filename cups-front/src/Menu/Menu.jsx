import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="category-container" style={{ backgroundImage: 'url("/assets/menu-background.jpg")' }}>
      <div className="overlay">
        <h1>Notre Menu</h1>
        <p>Découvrez nos options gourmandes pour tous les goûts.</p>
      </div>
    </div>
  );
}

export default Menu;
