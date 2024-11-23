import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faTags, faUtensils } from '@fortawesome/free-solid-svg-icons'; // Changer l'icône pour "faUtensils" (Menu)
import Home from './Home/Home'; // Assurez-vous que le chemin est correct
import './App.css'; // Importation du CSS global
import Promos from './Promos/Promos';
import Panier from './Panier/Panier';
import Menu from './Menu/Menu';
import Boissons from './Boissons/Boissons';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="logo">
           <Link to="/" ><img src="./assets/logo.png" alt="Cups Coffee Logo" className="logo-image" /> </Link> {/* Logo ajouté ici */}
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} className="icon" /> {/* Icône Home */}
                  Home
                </Link>
              </li>
              <li>
                <Link to="/panier">
                  <FontAwesomeIcon icon={faShoppingCart} className="icon" /> {/* Icône Panier */}
                  Panier
                </Link>
              </li>
              <li>
                <Link to="/promos">
                  <FontAwesomeIcon icon={faTags} className="icon" /> {/* Icône Promos */}
                  Promos
                </Link>
              </li>
              <li>
                <Link to="/menu"> {/* Changement du lien Articles vers Menu */}
                  <FontAwesomeIcon icon={faUtensils} className="icon" /> {/* Icône Menu */}
                  Menu {/* Changement du texte */}
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="promos" element={<Promos />} />
            <Route path="panier" element={<Panier />} />
            <Route path="menu" element={<Menu />} />
            <Route path="boissons" element={<Boissons />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
        </main>

        <footer className="app-footer">
          <div className="footer-content">
            <p>Suivez-nous sur <a href="https://www.instagram.com/cupscoffee.shop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a> pour découvrir nos dernières créations.</p>
            <p>&copy; 2024 Cups Coffee - Tous droits réservés</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
