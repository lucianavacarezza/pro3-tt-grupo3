import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
        <React.Fragment>
        <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`}/>
        <h2>{this.props.data.original_title}</h2>
        <p>{this.props.data.overview}</p>
        <button>Ver descripción</button>
        <Link to={`/movie/${this.props.data.id}`}>
                <button>Ir a detalle</button>
        </Link>
        <button>Agregar a favoritos</button>
        </React.Fragment>
        )
    }
}

export default Movie