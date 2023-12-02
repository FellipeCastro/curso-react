import React, {useState} from 'react';
import MudarImg from './components/MudarImg';

import './App.css';

export default function App() {

  const [mudado, setMudado] = useState(false)

  const cancelar = (obj) => {
    return obj.preventDefault()
  }

  return (
    <>
      <MudarImg
        mudado={mudado}
        setMudado={setMudado}
      />
      <br/>
      <a href="http://youtube.com/cfbcursos"target='_blank' onClick={cancelar}>CFB Cursos</a>
    </>
  )
}