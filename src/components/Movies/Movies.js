import React, {Component} from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

class Movies extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            peliculas: [],
            cargador: true
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

    render(){
        return(
            <React.Fragment>
                <section>
                {this.state.peliculas.length === 20 ?
                    <h3 className="cargador">Cargando...</h3> :
                    this.state.peliculas.slice(0,5).map((peli) => <Movie data = {peli}/>)}
                </section>
            </React.Fragment>

            
        )

    }
}

export default Movies