import React, {useState, useEffect} from "react";

export default function ListaCarros() {
    
    const [carros, setCarros] = useState([])

    useEffect(() => {

        fetch(/*url da API*/)
        .then(resultado => resultado.json()) // transformando dados em JSON
        .then((res) => {
            setCarros(res) // colocando dados no state
        })
    })

    return (
        <ul>
            {carros.map(carro => {
                <li key={carro.id}>
                    {carro.marca} - {carro.modelo}
                </li>
            })}
        </ul>
    )
}