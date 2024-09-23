import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Busqueda.css"

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: ""
        }

    }

    evitarSubmit(event) {
        event.preventDefault()
    }
    controlarCambios(event) {
        this.setState({ valor: event.target.value })
    }

    render() {
        return (
            <form onSubmit={(event) => this.evitarSubmit(event)} className="form-container">
                <input className="form-input" type="text" placeholder="Escribir el nombre de una película" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                <Link to={`/searchResults/${this.state.valor}`}>
                    <button type="submit" className="form-button">Buscar</button>
                </Link>

            </form>
        )
    }

}

export default Busqueda