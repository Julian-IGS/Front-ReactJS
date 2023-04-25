import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du CSS de Bootstrap
import PokedexImg from '../img/pokedex.png';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]); // On utilise le hook useState pour initialiser l'état du pokemon à une valeur vide
  useEffect(() => {
    fetch('http://localhost:5000/api/pokemon') // Requête pour récupérer la liste des pokemons depuis l'API
      .then(response => response.json())
      .then(data => setPokemons(data)); // Mise à jour du state avec la liste des pokemons
  }, []);

  return (
    <div className="container-fluid bg-primary" style={{ minHeight: "100vh", marginTop: 0 }}>
      <img src={PokedexImg} alt="Pokedex Image" className="mx-auto d-block" style={{ maxHeight: "200px", maxWidth: "200px" }}/>
      <div className="row">
        {pokemons.map(pokemon => (
          <div className="col-md-3 mb-3" key={pokemon.pokedexId}>
            <div className="card" style={{ border: "4px solid #FFE031" }}>
              <img
                src={pokemon.picture}
                alt={pokemon.name}
                className="card-img-top"
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{pokemon.name}</h5>
                <Link to={`/${pokemon._id}`} className="btn btn-outline-primary">Voir détails</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container-fluid">
    <div className="row justify-content-end">
      <div className="col-md-3 mb-3">
        <Link to="/add" className="btn btn-primary">Ajouter un Pokémon</Link>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Pokedex;
