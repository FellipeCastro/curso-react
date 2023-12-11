import React, {useState} from 'react';

import './App.css';

export default function App() {

  const [valorTela, setValorTela] = useState("")
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  // Componentes
  const tela = (valor, res) => {
    return (
      <div style={cssTela}>
        <span style={cssTelaOperacao}>{valor}</span>
        <span style={cssTelaResultado}>{res}</span>
      </div>
    )
  }

  const btn = (label, onClick) => {
    return (
      <button style={cssBtn} onClick={onclick}>
        {label}
      </button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if ((d == "+" || d == "-" || d == "*" || d == "/") && operado) {
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
      return
    } 

    if (operado) {
      setValorTela(d)
      setOperado(false)
      return
    }

    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria = () => {
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  // Estilos
  const cssTela = {
    display:'flex',
    padding: '0 20px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    width: '260px'
  }
  
  const cssTelaOperacao = {
    fontSize: '25px',
    color: '#fff',
    height: '20px',
  }
  
  const cssTelaResultado = {
    fontSize: '50px',
    color: '#fff',
  }

  const cssBtn = {
    fontSize: '30px',
    height: '75px',
    width: '75px',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#000',
    textAlign: 'center',
    outline: 'none'
  }
  
  return (    
    <>

    </>
  );
}