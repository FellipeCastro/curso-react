import React, {useState} from 'react';

import './App.css';

export default function App() {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo']
  const listaCarros = carros.map((car, i) => 
    <li key={i}>{i} -   {car}</li>
  )

  return (
    <>
      <h1>Carros</h1>
      <ul>{listaCarros}</ul>
    </>
  )
}