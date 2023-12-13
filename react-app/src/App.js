import React, {useState} from 'react';

import ListaNumeros from './components/ListaNumeros';

import './App.css';

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App() {
  return (    
    <>
      <ListaNumeros numeros={arrayNumeros}/>
    </>
  );
}