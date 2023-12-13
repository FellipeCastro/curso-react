import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Pagina1 from './components/Pagina1';
import Pagina2 from './components/Pagina2';
import Pagina3 from './components/Pagina3';

import './App.css';

export default function App() {
  return (    
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/pagina1">Página 1</Link>
        <Link to="/pagina2">Página 2</Link>
        <Link to="/pagina3">Página 3</Link>
      </header>
      <main>
      <Routes>
        <Route path="/pagina1" element={<Pagina1/>}/>
        <Route path="/pagina2" element={<Pagina2/>}/>
        <Route path="/pagina3" element={<Pagina3/>}/>
      </Routes>
      </main>
    </>
  );
}