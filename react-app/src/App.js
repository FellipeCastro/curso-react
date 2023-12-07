import React from 'react';

import './App.css';

import Classe from './components/Classe';
import Carro from './components/Carro';

export default function App() {
  return (
    <>
      <h1>Componentes de Classe</h1>
      <Classe canal="CFB Cursos" curso="React"/>
      <Carro/>
    </>
  )
}