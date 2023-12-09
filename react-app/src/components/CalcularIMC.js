import React from "react";

export default class CalcularIMC extends React.Component {
    constructor(props) {
        super(props)
        this.calc = this.calc.bind(this)
    } 

    calc = () => {
        this.props.setResultado(this.props.peso/(this.props.altura**2))
    }

    render() {



        return (
            <div>
                <button onClick={this.calc}>Calcular</button>
            </div>
        )
    }
}