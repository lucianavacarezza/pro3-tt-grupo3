import React, { Component } from "react";

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
        <button>Ir a detalle</button>
        <button>Agregar a favoritos</button>
        </React.Fragment>
        )
    }
}

export default Movie