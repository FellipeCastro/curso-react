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
      <button style={cssBtn} onClick={onClick}>
        {label}
      </button>
    )
  }

  // Funções
  const addDigitoTela = (d) => {
    if ((d == "+" || d == "-" || d == "*" || d == "/") && operado) {
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

  const operacao = (oper) => {
    if (oper == 'bs') {
      let vtela = valorTela
      vtela = vtela.substring(0, (vtela.length - 1))
      setValorTela(vtela)
      setOperado(false)
      return
    }

    try{
      const r = eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado("ERRO")
    }
  }

  // Estilos
  const cssContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '300px',
    border: '1px solid #000'
  }

  const cssBotoes = {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

  const cssTela = {
    display:'flex',
    padding: '0 20px',
    justifyContent: 'center',
    alignItems: 'flex-end',
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
      <div style={cssContainer}>
        <h3>Calculadora Matemática Simples</h3>

        {tela(valorTela, resultado)}
        <div style={cssBotoes}>
          {btn('AC', limparMemoria)}
          {btn('(', () => addDigitoTela('('))}
          {btn(')', () => addDigitoTela(')'))}
          {btn('/', () => addDigitoTela('/'))}
          {btn('7', () => addDigitoTela('7'))}
          {btn('8', () => addDigitoTela('8'))}
          {btn('9', () => addDigitoTela('9'))}
          {btn('*', () => addDigitoTela('*'))}
          {btn('4', () => addDigitoTela('4'))}
          {btn('5', () => addDigitoTela('5'))}
          {btn('6', () => addDigitoTela('6'))}
          {btn('-', () => addDigitoTela('-'))}
          {btn('1', () => addDigitoTela('1'))}
          {btn('2', () => addDigitoTela('2'))}
          {btn('3', () => addDigitoTela('3'))}
          {btn('+', () => addDigitoTela('+'))}
          {btn('0', () => addDigitoTela('0'))}
          {btn('.', () => addDigitoTela('.'))}
          {btn('<', () => operacao('bs'))}
          {btn('=', () => operacao('='))}
        </div>
      </div>
    </>
  );
}