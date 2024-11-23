import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faTags, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/"><img src="./assets/logo.png" alt="Cups Coffee Logo" className="logo-image" /></Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/panier">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
              Panier
            </Link>
          </li>
          <li>
            <Link to="/promos">
              <FontAwesomeIcon icon={faTags} className="icon" />
              Promos
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <FontAwesomeIcon icon={faUtensils} className="icon" />
              Menu
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
