import React from "react";

export default class Resultado extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <div>
                <p>Resultado: {this.props.resultado.toFixed(2)}</p>
            </div>
        )
    }
}