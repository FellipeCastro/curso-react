import React from 'react';
import './App.css';
import Relogio from './components/Relogio';

export default function App() { 
  
    const textDestaque = {
      color: '#00f',
      fontSize: '3em'
    }

  return (
    <>
    <section className='caixa'>
      <Relogio/>
      <h1 style={{color: '#f00', fontSize: '5em'}}>CFB Cursos</h1>
      <h2 style={textDestaque}>Curso de React</h2>
      <p className='texto'>Se inscreva em nosso canal e nos siga nos instagram</p>      
      <a href="https://www.youtube.com/cfbcursos" target='_blank'>CFB Cursos</a>
    </section>
    </>
  )
}