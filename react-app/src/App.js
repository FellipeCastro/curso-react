import React, {useState, useEffect} from 'react';


import './App.css';

export default function App() {
  
  const [nome, setNome] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave))
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  return (
    <>
      <label htmlFor='nome'>Digite um Nome: </label>
      <br/>
      <input type='text' id='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <br/>
      <button onClick={() => armazenar('ls_nome', nome)}>Gravar nome</button>
      <button onClick={() => consultar('ls_nome')}>Consultar nome</button>
      <button onClick={() => apagar('ls_nome')}>Apagar nome</button>
    </>
  )
}