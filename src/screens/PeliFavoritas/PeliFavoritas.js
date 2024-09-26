import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import "./PeliFavoritas.css";

class PeliFavoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      peliculas: [], 
    };
  }

  componentDidMount() {
    this.cargarFavoritos();
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
        peliculas: this.state.peliculas.filter(peli => peli.id !== id)
      });
    }
  };

  render() {
    const { peliculas } = this.state;

    if (peliculas.length === 0) {
      return <p class="sinfavoritos">No tenes películas en favoritos</p>;
    }

    return (
      <React.Fragment>
        <Header />
        <div className="favorites-page">
          <h1>Tus Películas Favoritas</h1>
          <div className="favorites-list">
            {peliculas.map(peli => (
              <div key={peli.id} className="movie-container">
                <img
                  src={`https://image.tmdb.org/t/p/w342/${peli.poster_path}`}
                  alt={peli.original_title}
                />
                <h2>{peli.original_title}</h2>
                <p>{peli.overview}</p>
                <Link to={`/movie/${peli.id}`}>
                  <button>Ir a detalle</button>
                </Link>
                <button onClick={() => this.sacarFavoritos(peli.id)}>
                  Quitar de favoritos
                </button>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PeliFavoritas;