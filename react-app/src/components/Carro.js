import React from "react";

export default class Carro extends React.Component {

    constructor(props) {
        super(props)
        this.modelo = "Golf"
        this.state={
            ligado: false,
            velAtual: 0,
        }
    }
    
    ligarDesligar() {
        this.setState({ligado: !this.state.ligado})
    }

    render() {
        return (
            <div>
                <h2>Meu Carro</h2>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Velociade Atual: {this.state.velAtual}</p>
                <button onClick={() => this.ligarDesligar()}>
                    {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
                </button>
            </div>
        )
    }
}