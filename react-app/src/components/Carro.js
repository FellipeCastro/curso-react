import React from "react";

export default class Carro extends React.Component {

    constructor(props) {
        super(props)
        this.modelo = "Golf"
        this.state={
            ligado: false,
            velAtual: 0,
        }
        this.ld = this.ligarDesligar.bind(this)
    }
    
    ligarDesligar() {
        // this.setState({ligado: !this.state.ligado})
        this.setState((state) => ({
            ligado: !state.ligado
        }))
    }

    acelerar() {
        {this.state.ligado ? (
            this.setState((state, props) => ({
                velAtual: state.velAtual + props.fator
            }))
        ) : (
            alert("Ligue o Carro para poder acelerar!")
        )}

    }

    alertLigarCarro() {
        alert("Ligue o carro para poder acelera-lo!")
    }

    componentDidMount() { // Quando o componente é montado/ Quando a página é atualizada
        console.log("O Carro foi criado")
    }

    componentDidUpdate() { // Quando o componente é atualizado/ ex: quando um state muda
        console.log("O Carro foi atualizado")
    }

    componentWillUnmount() { // Quando o componente não estiver no DOM/ 
        console.log("Carro Removido")
    }

    render() {
        return (
            <div>
                <h2>Meu Carro</h2>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Velociade Atual: {this.state.velAtual}</p>
                <p>{this.state.velAtual >= 100 ? "Multado! Velocidade acima de de 100Km/h" : ""}</p>
                <button onClick={this.ld}>
                    {this.state.ligado ? "Desligar Carro" : "Ligar Carro"}
                </button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
            </div>
        )
    }
}