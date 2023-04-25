import React, { useState, useEffect } from 'react';

function AddPokemon() {
    const [name, setName] = useState(''); // On utilise le hook useState pour initialiser l'état du nom du pokemon à une valeur vide
    const [picture, setPicture] = useState(''); // On utilise le hook useState pour initialiser l'état de l'image du pokemon à une valeur vide
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    

    const handleSubmit = (event) => {
      event.preventDefault(); // Empêche la soumission du formulaire
  
      // Envoie une requête POST à l'API pour ajouter le nouveau pokemon
      fetch('http://localhost:5000/api/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "pokedexId": 500,
            "name": "test",
            "height": 200,
            "weight": 18.7,
            "stats": {
              "hp": 30,
              "attack": 40,
              "defense": 30,
              "special_attack": 40,
              "special_defense": 30,
              "speed": 40
            },
            "picture": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            "elements": "63ce798adbde71362b88c3b1",
            "learningSkills": "63d0e0f1eaac93155b36a49d"
          }),          
      })
        .then(response => response.json())
        .then(data => console.log(data)) // Affiche les données renvoyées par l'API dans la console
        .catch(error => console.error(error)); // Affiche l'erreur dans la console s'il y en a une
    };
  
    return (
        <div className="container-fluid bg-primary" style={{ minHeight: "100vh", marginTop: 0 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="height">Hauteur</label>
            <input type="number" className="form-control" id="height" value={height} onChange={e => setHeight(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Poids</label>
            <input type="number" className="form-control" id="weight" value={weight} onChange={e => setWeight(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">hp</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">attack</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">defense</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">special_attack</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">special_defense</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">speed</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="picture">Image</label>
            <input type="text" className="form-control" id="picture" value={picture} onChange={e => setPicture(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">elements</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="name">learningSkills</label>
            <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <button type="submit" className="btn">Ajouter</button>
        </form>
      </div>    
    );
  }
  
  export default AddPokemon;
  