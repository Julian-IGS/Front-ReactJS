import React, { useState, useEffect } from 'react'

export default function Pokedex() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/pokemon')
      .then(response => response.json())
      .then(data => setPokemon(data))
     
  }, []);
// Creer une méthode pour afficher le pokemon selectionner
// depuis onclick

// recuperer dynamiquement l'id depuis URL que je vais passer dans fetch /uID
  return (
    <div>
    </div>
  )
}