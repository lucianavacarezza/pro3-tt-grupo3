import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Movie.css"

class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
            boton: "Ver descripción",
            clase: "ocultar"
        }

    }


    cambiarBoton() {
        if (this.state.boton === "Ocultar descripción") {
          this.setState({
            boton: "Ver descripción",
            clase: "ocultar"
          })      
        } else {
          this.setState({
            boton: "Ocultar descripción",
            clase: "mostrar"
          })}}

    

    render(){
        return(
        <React.Fragment>
        <img src={`https://image.tmdb.org/t/p/w342/${this.props.data.poster_path}`}/>
        <h2>{this.props.data.original_title}</h2>
        <p className={this.state.clase}>{this.props.data.overview}</p>
        <button onClick={(()=>this.cambiarBoton())} >{this.state.boton}</button>
        <Link to={`/movie/${this.props.data.id}`}>
        <button>Ir a detalle</button>
        </Link>
        <button>Agregar a favoritos</button>
        </React.Fragment>
        )
    }
}

export default Movie