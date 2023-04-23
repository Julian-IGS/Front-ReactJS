import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokedexImg from '../img/pokedex.png';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data));
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
    </div>
  );
}

export default Pokedex;
