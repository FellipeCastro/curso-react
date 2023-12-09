import React from "react";

export default function Resultado(props) {
    return (
        <div>
        <p>Resultado: {props.resultado.toFixed(2)}</p>
      </div>
    )
}