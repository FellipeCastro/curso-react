import React, {useState} from 'react';
import './App.css';
import Numero from './components/Numero';

export default function App() { 
  
  const [num, setNum] = useState(10)

  const [nome, setnome] = useState()
  
  return (
    <>
      <p>Valor do state num em App: {num}</p>
      <Numero
        num={num}
        setNum={setNum}
      />
    </>
  )
}