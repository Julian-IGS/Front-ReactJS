import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Modal() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/pokemon/${id}`)
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, [id]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <div>{pokemon.height}</div>
      {/* ... */}
    </div>
  );
}
