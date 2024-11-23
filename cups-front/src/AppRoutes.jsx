import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';  // Corriger le chemin vers Home
import Promos from './Components/Promos/Promos';  // Corriger le chemin vers Promos
import Panier from './Components/Panier/Panier';  // Corriger le chemin vers Panier
import Menu from './Components/Menu/Menu';  // Corriger le chemin vers Menu
import Boissons from './Components/Boissons/Boissons';  // Corriger le chemin vers Boissons

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="promos" element={<Promos />} />
      <Route path="panier" element={<Panier />} />
      <Route path="menu" element={<Menu />} />
      <Route path="boissons" element={<Boissons />} />
    </Routes>
  );
};

export default AppRoutes;
