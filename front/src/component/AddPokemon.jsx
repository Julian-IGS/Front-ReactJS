import React, { useState} from 'react';
import "../CSS/add.scss";

function AddPokemon() {
    const [name, setName] = useState(''); // On utilise le hook useState pour initialiser l'état du nom du pokemon à une valeur vide
    const [picture, setPicture] = useState(''); // On utilise le hook useState pour initialiser l'état de l'image du pokemon à une valeur vide
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [special_attack, setSpecial_attack] = useState(0);
    const [special_defense, setSpecial_defense] = useState(0);
    const [speed, setSpeed] = useState(0);


    const getPokemonId = async() => {
        const pokemons = await fetch('http://localhost:5000/api/pokemon') // Requête pour récupérer la liste des pokemons depuis l'API
        .then(response => response.json())
        return pokemons.length+1
    }

    const handleSubmit = async (event) => {
      event.preventDefault(); // Empêche la soumission du formulaire
      const pokedexId = await getPokemonId()
  const data = 
    {
        pokedexId, 
        name,
        height,
        weight,
        stats:{
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed,
        },
        picture,
        "elements": "63ce798adbde71362b88c3b1",
        "learningSkills": "63d0e0f1eaac93155b36a49d",
  }
  console.log(data)
      // Envoie une requête POST à l'API pour ajouter le nouveau pokemon
        fetch('http://localhost:5000/api/pokemon', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),          
        })
        .then(response => response.json())
        .then(data => console.log(data)) // Affiche les données renvoyées par l'API dans la console
        .catch(error => console.error(error)); // Affiche l'erreur dans la console s'il y en a une
    };
  
    return (
        <form id="form" onSubmit={handleSubmit}>
        <p>Ajouter votre pokemon.</p>
     
        <div class="form-group">
           <label htmlFor="name">Nom</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
              </div>
           </div>
           
        <div class="form-group">
           <label htmlFor="height">Hauteur</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="height" value={height} onChange={e => setHeight(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="weight">Poids</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="weight" value={weight} onChange={e => setWeight(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="HP">Vie</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="hp" value={hp} onChange={e => setHp(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="attack">Attaque</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="attack" value={attack} onChange={e => setAttack(e.target.value)} required />
              </div>
           </div>

           <div class="form-group">
           <label htmlFor="defense">Defense</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="defense" value={defense} onChange={e => setDefense(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="special_attack">Attaque spéciale</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="special_attack" value={special_attack} onChange={e => setSpecial_attack(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="special_defense">Defense spéciale</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="special_defense" value={special_defense} onChange={e => setSpecial_defense(e.target.value)} required />
              </div>
           </div>
           
           <div class="form-group">
           <label htmlFor="speed">Vitesse</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="speed" value={speed} onChange={e => setSpeed(e.target.value)} required />
              </div>
           </div>
           <div class="form-group">
           <label htmlFor="picture">Photo</label>
                 <br />
                 <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i>            </div>
              <input type="text" id="picture" value={picture} onChange={e => setPicture(e.target.value)} required />
              </div>
           </div>
        <button type="submit" class="btn btn-default">Sauvegarder</button>
     </form>   
     
    );
  }
  
  export default AddPokemon;
  