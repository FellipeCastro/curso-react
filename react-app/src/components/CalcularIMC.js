import React from "react";

export default function CalcularIMC(props) {
  
    const calc = () => {
        props.setResultado(props.peso/(props.altura**2))
    }
    
    return (
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    )
}