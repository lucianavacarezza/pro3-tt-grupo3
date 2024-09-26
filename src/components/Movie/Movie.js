import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boton: "Ver descripción",
      clase: "ocultar",
      esFav: false,  // Verificar si la película está en favoritos
      textoFav: "Agregar a favoritos"  // Texto del botón de favoritos
    };
  }

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(this.props.data.id)) {
      this.setState({
        esFav: true,
        textoFav: "Quitar de favoritos"
      });
    }
  }

  cambiarBoton = () => {
    if (this.state.boton === "Ocultar descripción") {
      this.setState({
        boton: "Ver descripción",
        clase: "ocultar"
      });
    } else {
      this.setState({
        boton: "Ocultar descripción",
        clase: "mostrar"
      });
    }
  };

  agregarAFavoritos = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(this.props.data.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.setState({
      esFav: true,
      textoFav: "Quitar de favoritos"
    });
  };

  quitarDeFavoritos = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(favId => favId !== this.props.data.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.setState({
      esFav: false,
      textoFav: "Agregar a favoritos"
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="movie-container">
          <img
            src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`}
            alt={this.props.data.original_title}
          />
          <h2>{this.props.data.original_title}</h2>
          <p className={this.state.clase}>{this.props.data.overview}</p>
          <button onClick={this.cambiarBoton}>{this.state.boton}</button>
          <Link to={`/movie/${this.props.data.id}`}>
            <button>Ir a detalle</button>
          </Link>

          {this.state.esFav === true && (
            <button onClick={this.quitarDeFavoritos}>
              {this.state.textoFav}
            </button>
          )}

          {this.state.esFav === false && (
            <button onClick={this.agregarAFavoritos}>
              {this.state.textoFav}
            </button>
          )}

        </section>
      </React.Fragment>
    );
  }
}

export default Movie;