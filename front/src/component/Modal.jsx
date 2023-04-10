import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Modal() {
  const { pokedexId } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemon/${pokedexId}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [pokedexId]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <img src={pokemon.picture} alt={pokemon.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              <p className="card-text">Height: {pokemon.height}cm</p>
              <p className="card-text">Weight: {pokemon.weight}kg</p>
              <Link to="/" className="btn btn-primary">Retour au Pokedex !</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
