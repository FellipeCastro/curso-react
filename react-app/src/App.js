import React from 'react';
import css from './components/img/css-3.jpg';

export default function App() {
  const canal = () => {
    return ('CFB Cursos')
  }

  function curso() {
    return ("Curso de React")
  }
  
  
  return (
    <>
    <header>
      <p>Canal: {canal()}</p>
      <br/>
      <p>{'Curso: ' + curso()}</p>
    </header>
    <section>
      <img src={css}/>
      <img src="/html-5.jpg"/>
    </section>

    </>
  )
}