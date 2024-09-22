import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

class Movies extends Component {
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            peliculas: [],
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
                    peliculas: data.results.slice(0, 5),
                    cargador: false

                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({ cargador: false })
            })
    }

    cargarMas() {
        fetch(this.props.api)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                let largo = this.state.peliculas.length + 5
                this.setState({
                    peliculas: data.results.slice(0, largo)
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
                    {this.state.peliculas.length === 0 ? // cambiar a 0
                        <h3 className="cargador">Cargando...</h3> :
                        this.state.peliculas.map((peli) => <Movie data={peli} />)}
                </section>
                {window.location.pathname.slice(1) === "populars" || window.location.pathname.slice(1) === "topRated" ? 
                this.state.peliculas.length === 20 ?
                    <h2>No hay más peliculas para mostrar</h2> :
                    <button onClick={() => this.cargarMas()}>{this.state.boton}</button>
                 : null
            }
            </React.Fragment>


        )

    }
}

export default Movies