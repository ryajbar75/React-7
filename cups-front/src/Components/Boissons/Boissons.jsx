import React, { useEffect, useState } from 'react';
import './Boissons.css';

const Boissons = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const apiKey = '74fea5a9eb4146cca0972c529b6515da'; // Remplacez par votre vraie clé API

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=drink&apiKey=${apiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur de connexion à l\'API');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data.results); // Vérifiez que `data.results` existe
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Fonction pour ajouter une boisson au panier
  const addToCart = (recipe) => {
    setCart([...cart, recipe]);
  };

  // Fonction pour afficher les détails de la recette
  const showDetails = (recipe) => {
    alert(`Détails de la recette: ${recipe.title}`);
    // Vous pouvez ici rediriger vers une page de détails ou afficher un modal avec plus d'infos
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h1>Recettes de Boissons</h1>
      <ul>
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} style={{ width: '200px', height: 'auto' }} />
              <div>
                <button onClick={() => addToCart(recipe)}>Ajouter au Panier</button>
                <button onClick={() => showDetails(recipe)}>Afficher les Détails</button>
              </div>
            </li>
          ))
        ) : (
          <p>Aucune recette trouvée.</p>
        )}
      </ul>
      
    </div>
  );
};

export default Boissons;
