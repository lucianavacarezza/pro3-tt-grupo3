import React, {Component} from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

class Movies extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            peliculas: [],
            cargador: true,
            boton: "Cargar más"
        }        
    }

    componentDidMount(){
        fetch(this.props.api)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                peliculas: data.results,
                cargador: false
                
            })
        })
        .catch((err)=> {
        console.log(err)
        this.setState({cargador:false})
        })
    }

    cargarMas(){

    }

    

    render(){
        return(
            <React.Fragment>
                <section>
                {this.state.peliculas.length === 0 ? // cambiar a 0
                    <h3 className="cargador">Cargando...</h3> :
                    this.state.peliculas.slice(0,5).map((peli) => <Movie data = {peli}/>)}
                </section>
                <button>{this.state.boton}</button>
            </React.Fragment>

            
        )

    }
}

export default Movies