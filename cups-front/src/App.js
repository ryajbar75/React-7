import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Import du composant des routes
import Header from './Components/Header/Header'; // Corriger le chemin vers Header
import Footer from './Components/Footer/Footer'; // Corriger le chemin vers Footer
import './App.css'; // Importation du CSS global

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* Utilisation du Header */}
        
        <main className="app-main">
          <AppRoutes/> {/* Affichage des routes */}
        </main>
        
        <Footer/> {/* Utilisation du Footer */}
      </div>
    </Router>
  );
}

export default App;
