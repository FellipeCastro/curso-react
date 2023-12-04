import React, {useState} from 'react';

import './App.css';

export default function App() {

  const [log, setLog] = useState(false)

  const msgLogin = () => {
    return 'Usuário Logado'
  }

  const msgLogOff = () => {
    return 'Favor Logar'
  }
  
  const cumprimento = () => {
    const hora = new Date().getHours()
    if (hora >= 0 && hora < 13) {
      return <p>Bom Dia</p>
    } else if (hora >= 13 && hora < 18) {
      return <p>Boa Tarde</p>
    } else {
      <p>Bioa Noite</p>
    }
  } 

  const [cor, setCor] = useState(1)

  const vermelho = {color: '#f00'}
  const verde = {color: '#0f0'}
  const azul = {color: '#00f'}

  const retCor = (c) => {
    if (c === 1) {
      return vermelho
    } else if (cor === 2) {
      return verde
    } else {
      return azul
    }
  }
  
  const mudaCor = () => {
    setCor(cor + 1)

    if (cor > 2) {
      setCor(1)
    }
  }

  setInterval(mudaCor, 1000)

  return (
    <>
      {cumprimento()}

      <p>{log ? msgLogin() : msgLogOff()}</p>
      <button onClick={() => setLog(!log)}>
        {log ? "Logoff" : "Login"}
      </button>

      <h1 style={retCor(cor)}>CFB Cursos</h1>
    </>
  )
}