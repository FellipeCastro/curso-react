import React, {useState} from 'react';

import './App.css';

import Tabela from './components/Tabela';
import InputPeso from './components/InputPeso';
import InputAltura from './components/InputAltura';
import CalcularIMC from './components/CalcularIMC';
import Resultado from './components/Resultado';

export default function App() {

  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [resultado, setResultado] = useState(0)

  return (
    <>
      <InputPeso
        peso={peso}
        setPeso={setPeso}
      />

      <InputAltura
        altura={altura}
        setAltura={setAltura}
      />

      <CalcularIMC
        peso={peso}
        altura={altura}
        setResultado={setResultado}
      />

      <Resultado
        resultado={resultado}
      />

      <Tabela/>
    </>
  );
}