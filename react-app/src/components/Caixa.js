import React from "react";

export default function Caixa(props) {
    return (
        <>
            <a href="#">{props.site}</a>
            {props.children}
        </>
    )
}