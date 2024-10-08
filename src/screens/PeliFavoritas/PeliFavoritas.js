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
      showMore: {},      
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
    favorites.forEach(id => {
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
    });
  };

  agregarFavoritos = (id) => {
    let { favorites } = this.state;
    if (!favorites.includes(id)) {
      const nuevoFavoritos = [...favorites, id];
      localStorage.setItem("favorites", JSON.stringify(nuevoFavoritos));
      this.setState({ favorites: nuevoFavoritos });
    }
  };

  sacarFavoritos = (id) => {
    let { favorites } = this.state;
    let nuevoArrayFav = favorites.filter(favId => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(nuevoArrayFav));
    this.setState({
      favorites: nuevoArrayFav,
      peliculas: this.state.peliculas.filter(peli => peli.id !== id),
    });
  };

  toggleShowMore = (id) => {
    this.setState((prevState) => ({
      showMore: {
        ...prevState.showMore,
        [id]: !prevState.showMore[id],
      },
    }));
  };

  render() {
    const { peliculas, favorites, showMore } = this.state;

    return (
      <React.Fragment>
        <Header />
        {peliculas.length === 0 ? 
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
                  onClick={() => favorites.includes(peli.id) 
                    ? this.sacarFavoritos(peli.id) 
                    : this.agregarFavoritos(peli.id)
                  }
                >
                  {favorites.includes(peli.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
                </button>

                <p className="more" onClick={() => this.toggleShowMore(peli.id)}>
                  {showMore[peli.id] ? "Ver Menos" : "Ver más"}
                </p>

                {showMore[peli.id] && (
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