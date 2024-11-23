import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const images = [
    '/assets/1.jpg',
    '/assets/2.jpg',
    '/assets/3.jpg',
    '/assets/4.jpg',
    '/assets/5.jpg',
    '/assets/6.jpg',
    '/assets/7.jpg',
    '/assets/8.jpg',
    '/assets/9.jpg',
    '/assets/10.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(true); // Gérer l'opacité pour le changement d'image

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Commence la transition de fondu

      setTimeout(() => {
        setCurrentImage(prevImage => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true); // Retour de l'opacité après le changement d'image
      }, 500); // Durée du fondu
    }, 2000); // Changement d'image toutes les 2 secondes

    return () => clearInterval(interval);
  }, [images]);

  // Catégories à afficher
  const categories = [
    {
      name: 'Boissons',
      image: '/assets/drinks.jpg',
      link: '/boissons',
    },
    {
      name: 'Pâtisseries',
      image: '/assets/pastries.jpg',
      link: '/patisseries',
    },
    {
      name: 'Menu',
      image: '/assets/menu.jpg',
      link: '/menu',
    },
  ];

  return (
    <div className="home-container">
      {/* Section de Slider d'images */}
      <div
        className={`image-slider ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${currentImage})` }}
      >
        <div className="overlay">
          <h1>Bienvenue chez Cups Coffee</h1>
          <p>Découvrez nos cafés et nos pâtisseries artisanales.</p>
        </div>
      </div>

      {/* Section Nos Catégories */}

      <p></p>
      <h2>Nos Catégories</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-card    ">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3 className="category-name">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
