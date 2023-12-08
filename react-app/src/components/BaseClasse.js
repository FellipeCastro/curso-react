import React from "react";

export default class BaseClass extends React.Component{
    constructor(props) {
        // Permitir o uso de PROPS
        super(props)
        
        // State
        this.state={
            canal: 'CFB Cursos',
            curso: 'React Js',
            ativo: true
        }
        
        // Bindagem
        let ad = this.ativarDesativar.bind(this)
    }

    // Função para manipular state
    ativarDesativar() {
        this.setState(
            state => ({
                ativo: !state.ativo
            })
        )
    }

    // Metodos de Ciclo de Vida de um componente

    componentDidMount() {
        console.log("O componente foi criado")
    }

    componentDidUpdate() {
        console.log("O componente foi atualizado")
    }

    componentWillUnmount() {
        console.log("O componente foi removido")
    }

    render() {
        return (
            <>
                <h1>Componente de Classe</h1>
                <h2>{this.state.canal}</h2>
                <h3>{this.state.curso}</h3>
                <p>{this.state.ativo ? "Ativo" : "Desativado"}</p>
                
                <button onClick={this.ad}>{this.state.ativo ? "Desativar Curso" : "Ativar Curso"}</button>
            </>
        )
    }
}