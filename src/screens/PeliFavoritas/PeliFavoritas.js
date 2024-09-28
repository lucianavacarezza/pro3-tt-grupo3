import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import './PeliFavoritas.css';

class PeliFavoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      peliculas: [],
      showMore: false,  // Añadido para manejar el estado de mostrar más detalles
      textoFav: "Quitar de favoritos", // Se usa un texto dinámico como en el código de clase
      cargador: true
    };
  }

  componentDidMount() {
    this.cargarFavoritos();
    this.setState({
      cargador: false

    })
  }

  cargarFavoritos = () => {
    let favorites = localStorage.getItem("favorites");
    if (favorites !== null) {
      favorites = JSON.parse(favorites);
      this.setState({ favorites });
      this.cargarDetallesPeliculas(favorites);
    }
  };

  cargarDetallesPeliculas = (favorites) => {
    for (let i = 0; i < favorites.length; i++) {
      const id = favorites[i];
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f514b0acc26df1dd866c112f7bcb6c0&language=es-ES`)
        .then(response => response.json())
        .then(data => {
          this.setState((prevState) => ({
            peliculas: [...prevState.peliculas, data]
          }));
        })
        .catch(error => {
          console.error("Error al cargar los detalles de la película", error);
        });
    }
  };

  sacarFavoritos = (id) => {
    let favorites = localStorage.getItem("favorites");
    if (favorites !== null) {
      let favParseados = JSON.parse(favorites);
      let nuevoArrayFav = favParseados.filter(elem => elem !== id);
      let nuevoArrayString = JSON.stringify(nuevoArrayFav);
      localStorage.setItem("favorites", nuevoArrayString);

      this.setState({
        favorites: nuevoArrayFav,
        peliculas: this.state.peliculas.filter(peli => peli.id !== id),
        textoFav: "Agregar a favoritos"  // Actualizar el texto cuando se quita de favoritos
      });
    }
  };

  toggleShowMore = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }));
  };

  render() {
    const { peliculas, showMore } = this.state;

    return (
      <React.Fragment>
        <Header />
        {this.state.cargador ?
          <h3 className="cargador">Cargando...</h3> :
          peliculas.length === 0 ?
            <p className="sinfavoritos">No tienes películas en favoritos</p> :
            <div className="favorites-page">
              <h1>Tus Películas Favoritas</h1>
              <div className="favorites-list">
                {peliculas.map(peli => (
                  <article key={peli.id} className="movie-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w342/${peli.poster_path}`}
                      alt={peli.original_title}
                    />
                    <h2>{peli.original_title}</h2>

                    <button
                      className='fav-button added'
                      onClick={() => this.sacarFavoritos(peli.id)}
                    >
                      {this.state.textoFav}
                    </button>

                    <p className="more" onClick={this.toggleShowMore}>
                      {showMore ? "Ver Menos" : "Ver más"}
                    </p>

                    {showMore && (
                      <section className='extra'>
                        <p><strong>Sinopsis:</strong> {peli.overview}</p>
                        <Link to={`/movie/${peli.id}`}>
                          <button>Ir a detalle</button>
                        </Link>
                      </section>
                    )}

                  </article>
                ))}
              </div>
            </div>
        }
        <Footer />
      </React.Fragment>
    );
  }
}

export default PeliFavoritas;