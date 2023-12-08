import React, {useState} from 'react';

import './App.css';

import Globais from './components/Globais';
import Info from './components/Info';

export default function App() {

  const [resumo, setResumo]= useState(Globais.resumo)
  
  const gravarResumo = () => {
    Globais.resumo = resumo
  }

  const verResumo = () => {
    alert(Globais.resumo)
  }

  return (
    <>
      <Info/>
      <hr/>
      <input type="text" size="30" value={resumo} onChange={(e) => setResumo(e.target.value)}/>
      <br/>
      <button onClick={() => gravarResumo()}>Gravar Resumo</button>
      <button onClick={() => verResumo()}>Ver Resumo</button>
    </>
  )
}