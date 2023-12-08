import React, {useState} from 'react';

import Globais from './Globais';

export default function Info() {

  return (
    <>
      <p>{`Canal ${Globais.canal}`}</p>
      <p>{`Curso de ${Globais.curso}`}</p>
      <p>{`Ano de ${Globais.ano}`}</p>
    </>
  )
}