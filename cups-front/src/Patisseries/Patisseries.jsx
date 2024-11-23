import React from 'react';
import './Patisseries.css';

function Patisseries() {
  return (
    <div className="category-container" style={{ backgroundImage: 'url("/assets/pastries-background.jpg")' }}>
      <div className="overlay">
        <h1>Nos Pâtisseries</h1>
        <p>Savourez nos délicieuses pâtisseries faites maison.</p>
      </div>
    </div>
  );
}

export default Patisseries;
