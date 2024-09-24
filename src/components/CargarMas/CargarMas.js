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
            boton: "Cargar más",
            api: "",
            pagina: 1

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
                    cargador: false,
                    api: this.props.api + this.state.pagina
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
                    backup: data.results,
                    pagina: this.state.pagina + 1,
                    api: this.props.api + (pagina +1)
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
                    
                {window.location.pathname.slice(1) === "populars" || window.location.pathname.slice(1) === "topRated" ?
                        <Filtro filtrarPeliculas={(titulo) => this.filtrarPeliculas(titulo)} />
                        : null
                    }

                    <article className="movies">
                    {this.state.peliculas.length === 0 ? 
                        <h3 className="cargador">Cargando...</h3> :
                        this.state.peliculas.map((peli) => <Movie data={peli} />)}
                    </article>
                </section>
                
                <button className="botonCargarMas" onClick={() => this.cargarMas()}>{this.state.boton}</button>
                 
                
            </React.Fragment>


        )

    }
}

export default CargarMas