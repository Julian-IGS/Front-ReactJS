import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Modal() {
  const { pokedexId } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemon/${pokedexId}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [pokedexId]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <div>Height: {pokemon.height}cm</div>
      <div>Weight: {pokemon.weight}kg</div>
      <img src={pokemon.picture} alt={pokemon.name} />
      {/* <div>Stats:</div>
      <ul>
      <li>HP: {pokemon.stats.hp}</li>
        <li>Attack: {pokemon.stats.attack}</li>
        <li>Defense: {pokemon.stats.defense}</li>
        <li>Special Attack: {pokemon.stats.special_attack}</li>
        <li>Special Defense: {pokemon.stats.special_defense}</li>
        <li>Speed: {pokemon.stats.speed}</li>
      </ul> */}
    </div>
  );
}
