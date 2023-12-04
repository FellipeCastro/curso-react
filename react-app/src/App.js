import React, {useState} from 'react';

import './App.css';

export default function App() {

  const [nome, setNome] = useState('HRV')

  const handleChangeNome = (e) => {
    setNome(e.target.value)
  }

  const [carro, setCarro] = useState('')

  return (
    <>
      <label htmlFor='fnome'>Digite seu nome: </label>
      <input 
        type='text'
        name='fnome'
        id='fnome'
        value={nome}
        onChange={(e) => handleChangeNome(e)}
      />
      <p>Nome digitado: {nome}</p>

      <label>Selecione um carro: </label>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value="HRV">HRV</option>
        <option value="Golf">Golf</option>
        <option value="Cruze">Cruze</option>
        <option value="Argo">Argo</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  )
}