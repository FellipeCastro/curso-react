import React from "react";

export default class InputAltura extends React.Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <div>
                <label htmlFor='altura'>Altura </label>
                <input type="text" value={this.props.altura} onChange={(e) => this.props.setAltura(e.target.value)} id='peso'/>
            </div>         
        )
    }
}