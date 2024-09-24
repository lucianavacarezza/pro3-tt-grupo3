import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from "../Header/Header"
import Footer from '../Footer/Footer';

class PeliFavoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],  
    };
  }

  componentDidMount() {
    this.cargarFavoritos();
  }

  cargarFavoritos = () => {
    let favorites = localStorage.getItem("favorites");
    if (favorites !== null) {
      favorites = JSON.parse(favorites);
    } else {
      favorites = [];
    }
    this.setState({ favorites });
  };

  sacarFavoritos = (id) => {
    let favorites = localStorage.getItem("favorites");
    if (favorites !== null) {
      let favParseados = JSON.parse(favorites);
      let nuevoArrayFav = favParseados.filter(elem => elem !== id);
      let nuevoArrayString = JSON.stringify(nuevoArrayFav);
      localStorage.setItem("favorites", nuevoArrayString);
      this.setState({ favorites: nuevoArrayFav }); 
    }
  };

  render() {
    const { favorites } = this.state;

    if (favorites.length === 0) {
      return <p>No tenes películas en favoritos</p>;
    }

    return (
      <React.Fragment>
      <Header/>
      <div className="favorites-page">
        <h1>Tus Películas Favoritas</h1>
        <div className="favorites-list">
          {favorites.map(id => (
            <div key={id} className="favorite-item">
              
              <Link to={`/movie/${id}`}>
                <p>Ir al detalle de la película {id}</p>
              </Link>

              
              <button onClick={() => this.sacarFavoritos(id)}>
                Eliminar de favoritos
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default PeliFavoritas;
