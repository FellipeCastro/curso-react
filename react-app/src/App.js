import React, {useState, useEffect} from 'react';


import './App.css';

export default function App() {  
  
  const [contagem, setContagem] = useState(0)
  
  useEffect(() => {
    console.log("página carregada")
    document.title="Contagem " + contagem
  })

  return (
    <>
      <p>Contagem: {contagem}</p>
      <button onClick={() => setContagem(contagem + 1)}>Contar</button>
    </>
  )
}