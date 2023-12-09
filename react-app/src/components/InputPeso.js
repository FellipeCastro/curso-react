import React from "react";

export default class InputPeso extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <div>
                <label htmlFor='peso'>Peso </label>
                <input type="text" value={this.props.peso} onChange={(e) => this.props.setPeso(e.target.value)} id='peso'/>
            </div>
        )
    }
}