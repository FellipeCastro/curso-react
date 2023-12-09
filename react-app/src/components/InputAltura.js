import React from "react";

export default function InputAltura(props) {
    return (
        <div>
            <label htmlFor='altura'>Altura </label>
            <input type="text" value={props.altura} onChange={(e) => props.setAltura(e.target.value)} id='peso'/>
        </div>
    )
}