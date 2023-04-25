import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './component/Pokedex';
import Modal from './component/Modal';
import AddPokemon from './component/AddPokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route path="/:pokedexId" element={<Modal />} />
        <Route path="/add" element={<AddPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;