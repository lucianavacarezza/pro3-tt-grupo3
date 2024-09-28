import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Movie from '../../components/Movie/Movie';
import './MovieDetail.css';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      peliculas: [],     
      textoFav: "Agregar a favoritos",
      esFav: false,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.fetchMovieDetails(movieId);

    let storage = localStorage.getItem("favorites");
    if (storage !== null) {
      let storageParseado = JSON.parse(storage);
      let estaEnFav = storageParseado.includes(movieId);
      if (estaEnFav) {
        this.setState({
          textoFav: "Quitar de favoritos",
          esFav: true
        });
      }
    }
  }

  fetchMovieDetails = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=1f514b0acc26df1dd866c112f7bcb6c0&language=es-ES`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener los detalles de la película");
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          movie: data,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false,
        });
      });
  };

  agregarFav = (id) => {
    let storage = localStorage.getItem("favorites");
    if (storage !== null) {
      let favParseados = JSON.parse(storage);
      favParseados.push(id);
      let favStringificado = JSON.stringify(favParseados);
      localStorage.setItem("favorites", favStringificado);
    } else {
      let arrayFav = [id];
      let arrayStringificado = JSON.stringify(arrayFav);
      localStorage.setItem('favorites', arrayStringificado);
    }
    this.setState({
      textoFav: "Quitar de favoritos",
      esFav: true
    });
  };

  sacarFav = (id) => {
    let storage = localStorage.getItem("favorites");
    let favParseados = JSON.parse(storage);
    let nuevoArrayFav = favParseados.filter(elem => elem !== id);
    let nuevoArrayString = JSON.stringify(nuevoArrayFav);
    localStorage.setItem("favorites", nuevoArrayString);
    this.setState({
      textoFav: "Agregar a favoritos",
      esFav: false
    });
  };

  render() {
    const { movie, loading, error, esFav } = this.state;

    if (loading) {
      return <p>Cargando detalles de la película...</p>;
    }

    if (error) {
      return <p>Ocurrió un error: {error.message}</p>;
    }

    return (
      <React.Fragment>
        <Header />
        <article className='movie-detail'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          
          <button 
            className={esFav ? 'fav-button added' : 'fav-button not-added'}  
            onClick={() => esFav ? this.sacarFav(this.props.match.params.id) : this.agregarFav(this.props.match.params.id)}
          >
            {this.state.textoFav}
          </button>

          <p><strong>Calificación:</strong> {movie.vote_average}</p>
          <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
          <p><strong>Duración:</strong> {movie.runtime} minutos</p>
          <p><strong>Sinopsis:</strong> {movie.overview}</p>
          <p><strong>Género:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>

        </article>
        
        <Footer />
      </React.Fragment>
    );
  }
}

export default MovieDetail;