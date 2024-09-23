import React, { Component } from "react";
import "./Movies.css";

class CargarMas extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            peliculas: [],
            backup: [],
            cargador: true,
            boton: "Cargar más"
        }
    }

    componentDidMount() {
        fetch(this.props.api)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    backup: data.results,
                    cargador: false

                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({ cargador: false })
            })
    }

    filtrarPeliculas(titulo) {
        if (titulo==="") {
            this.setState({peliculas: this.state.backup})
            
        } else {
        let peliculasFiltradas = this.state.backup.filter((peli) => peli.title.toLowerCase().includes(titulo.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas
        })}
    }

    cargarMas() {
        fetch(this.props.api)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    backup: data.results
                })
                console.log(this.state.peliculas);
            })
            .catch((err) => {
                console.log(err)
                this.setState({ cargador: false })
            })
    }


    render() {        
        return (
            <React.Fragment>
                <section>

                </section>
            </React.Fragment>


        )

    }
}

export default CargarMas