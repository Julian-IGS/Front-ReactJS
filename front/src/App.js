import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokedex from './component/Pokedex';
import Modal from './component/Modal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route path="/:id" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;