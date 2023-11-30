import React from "react";

export default function Dados(props) {

    let n1 = 10
    n1 += 7
    let n2 = 5

    return (
        <section>
            <p>Canal: {props.canal()}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Cursos: {props.curso}</p>
            <p>{`A Soma de ${n1} e ${n2} é igual á: ${props.somar(n1, n2)}`}</p>
        </section>
    )
}