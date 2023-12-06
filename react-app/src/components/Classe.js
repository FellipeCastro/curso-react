import React from "react";

export default class Classe extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h2>Primeiro Componente de Classe</h2>
                <p>Canal: {this.props.canal}</p>                
                <p>Curso: {this.props.curso}</p>                
            </div>
        )
    }
}