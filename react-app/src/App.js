import React, {useState} from 'react';


import './App.css';

import Caixa from './components/Caixa';
import Canal from './components/Canal';

export default function App() {  
  return (
    <>
      <Caixa site="www.cfbcursos.com.br">
        <Canal/>
        <h1>CFB Cursos</h1>
        <p>Curso de React</p>
      </Caixa>
    </>
  )
}