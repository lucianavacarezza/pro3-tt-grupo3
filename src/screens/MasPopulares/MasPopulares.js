import React, { Component } from "react";
import Movie from "../../components/Movie/Movie";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MasPopulares.css"
import Filtro from "../../components/Filtro/Filtro";

class MasPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            backup: [],
            pagina: 1,
            cargador: true,
            filtradas: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0&page=${this.state.pagina}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    peliculas: data.results,
                    backup: data.results,
                    pagina: this.state.pagina + 1,
                    cargador: false
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({})
            })
    }

    cargarMas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0&page=${this.state.pagina}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    backup: this.state.backup.concat(data.results),
                    pagina: this.state.pagina + 1
                })
            })
            .catch((err) => {
                console.log(err)
                this.setState({})
            })
    }

    filtrarPeliculas(titulo) {
        if (titulo === "") {
            this.setState({ peliculas: this.state.backup })

        } else {
            let peliculasFiltradas = this.state.backup.filter((peli) => peli.title.toLowerCase().includes(titulo.toLowerCase()))
            this.setState({
                peliculas: peliculasFiltradas,
                filtradas: peliculasFiltradas
            })
        }
        console.log(this.state.peliculas);

    }

    render() {


        return (
            <React.Fragment>
                <Header />
                <Filtro filtrarPeliculas={(titulo) => this.filtrarPeliculas(titulo)} />
                {this.state.cargador ?
                    <h3 className="cargador">Cargando...</h3> :
                    <section>
                        <h2>Las más populares</h2>
                        {this.state.peliculas.length === 0 ?
                            <p className="cargador">No existen peliculas con ese nombre</p>
                            :
                            <article className="movies">
                                {this.state.peliculas.map((peli) => <Movie data={peli} />)}
                            </article>
                        }
                        <button className="botonCargarMas" onClick={() => this.cargarMas()}>Cargar más</button>
                    </section>
                }
                <Footer />
            </React.Fragment>
        )
    }
}

export default MasPopulares

