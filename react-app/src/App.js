import React, {useState} from 'react';

import './App.css';

import Classe from './components/Classe';
import Carro from './components/Carro';

export default function App() {

  const [carro, setCarro] = useState(true)
  const remover = () => {
    setCarro(!carro)
  }

  return (
    <>
      <h1>Componentes de Classe</h1>
      {carro ? <Carro fator={10}/> : ""}      
      <button onClick={() => remover()}>{carro ? "Remover Carro" : "Adicionar Carro"}</button>
    </>
  )
}