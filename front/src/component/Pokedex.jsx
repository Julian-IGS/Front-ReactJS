import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data))
     
  }, []);
// Creer une méthode pour afficher le pokemon selectionner
// depuis onclick

  return (

    <div>
    {pokemons.map(pokemon => (
      <div key={pokemon.pokedexId} >
            <Link to={`/${pokemon._id}`}>{pokemon.name}</Link>
      </div>
    ))}
    </div>
  )

  
}
export default Pokedex;
