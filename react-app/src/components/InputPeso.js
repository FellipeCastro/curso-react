import React from "react";

export default function InputPeso(props) {
    return (
        <div>
            <label htmlFor='peso'>Peso </label>
            <input type="text" value={props.peso} onChange={(e) => props.setPeso(e.target.value)} id='peso'/>
        </div>
    )
}