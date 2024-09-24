import React, { Component } from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

class Movies extends Component {
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
                    peliculas: data.results.slice(0, 5),
                    backup: data.results.slice(0, 5),
                    cargador: false

                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({ cargador: false })
            })
    }

    render() {    
        console.log(this.props);
        
            
        return (
            <React.Fragment>

                <section>

                    {window.location.pathname.slice(1) === "populars" ?
                        <h2 className="titulo">Las más populares</h2> :
                        window.location.pathname.slice(1) === "topRated" ?
                        <h2>Mejores punteadas</h2> :
                        null}

                    <article className="movies">
                    {this.state.peliculas.length === 0 ? 
                        <h3 className="cargador">Cargando...</h3> :
                        this.state.peliculas.map((peli) => <Movie data={peli} />)}
                    </article>
                </section>
                {window.location.pathname.slice(1) === "populars" || window.location.pathname.slice(1) === "topRated" ?
                    this.state.peliculas.length === 20 ?
                        <h2>No hay más peliculas para cargar</h2> :
                        <button className="botonCargarMas" onClick={() => this.cargarMas()}>{this.state.boton}</button>
                    : null
                }
            </React.Fragment>


        )

    }
}

export default Movies