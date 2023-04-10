import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
  }, []);

  return (
    <div className="container">
      <h3 className="text-center my-3">Liste des Pokemons</h3>
      <div className="row">
        {pokemons.map(pokemon => (
          <div className="col-md-3 mb-3" key={pokemon.pokedexId}>
            <div className="card">
              <img src={pokemon.picture} alt={pokemon.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <Link to={`/${pokemon._id}`} className="btn btn-primary">Voir détails</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokedex;
