import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import du CSS de Bootstrap

export default function Modal() {
  const { pokedexId } = useParams(); // On récupère l'id du pokemon depuis les paramètres de l'URL grâce à useParams
  const [pokemon, setPokemon] = useState({}); // On utilise le hook useState pour initialiser l'état du pokemon à une valeur vide

  useEffect(() => { // On utilise le hook useEffect pour faire une requête à l'API
    fetch(`http://localhost:5000/api/pokemon/${pokedexId}`) 
      .then(response => response.json())
      .then(data => setPokemon(data)); // Mise à jour du state avec la liste des pokemons
  }, [pokedexId]);

  return (
    pokemon.stats && ( // Si les statistiques du pokemon sont définies (pour éviter les erreurs de rendu)
      <div className="container-fluid bg-primary" style={{ minHeight: "100vh" }}>
        <div className="row justify-content-center align-items-center" style={{ height: "100%" }}>
          <div className="col-md-6">
            <div className="card shadow-lg bg-light" style={{ border: "4px solid #FFE031" }}>
              <img src={pokemon.picture} alt={pokemon.name} className="card-img-top mx-auto" style={{ maxHeight: "200px", maxWidth: "200px" }} />

              <div className="card-body">
                <h5 className="card-title text-center text-primary">{pokemon.name}</h5>
                <p className="card-text text-center">
                  <span className="text-muted">Height: </span>{pokemon.height}cm<br />
                  <span className="text-muted">Weight: </span>{pokemon.weight}kg<br />
                  <span className="text-muted">Life: </span>{pokemon.stats.hp}Hp<br />
                  <span className="text-muted">Attack: </span>{pokemon.stats.attack}<br />
                  <span className="text-muted">Defense: </span>{pokemon.stats.defense}<br />
                  <span className="text-muted">Special Attack: </span>{pokemon.stats.special_attack}<br />
                  <span className="text-muted">Special Defense: </span>{pokemon.stats.special_defense}<br />
                  <span className="text-muted">Speed: </span>{pokemon.stats.speed}<br />
                  <span className="text-muted">Type: </span>{pokemon.elements.name}<br />
                  <span className="text-muted"></span>{pokemon.learningSkills.description}
                </p>
                <div className="text-center">
                  <Link to="/" className="btn btn-outline-primary">Retour au Pokedex !</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
