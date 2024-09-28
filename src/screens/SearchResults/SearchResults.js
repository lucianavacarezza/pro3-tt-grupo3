import React, {Component} from "react";
import Movie from "../../components/Movie/Movie";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            peliculas: [],
            backup: [],
            cargador: false
        }
        console.log(this.props.match.params.peliculas);
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f514b0acc26df1dd866c112f7bcb6c0&query=${this.props.match.params.peliculas}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                peliculas: data.results,
                backup: data.results,
                cargador: false

            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({ cargador: false })
        })
    }
   
    render(){ 
        console.log(this.state.peliculas);
        return(
            <React.Fragment>
                <Header/>
                <h1>Resultados para "{this.props.match.params.peliculas}" </h1> 
                <article className="movies">
                    {this.state.cargador ? 
                    <h3 className="cargador">Cargando...</h3> : 
                    this.state.peliculas.length !== 0 ?  
                    this.state.peliculas.map((peli,idx)=> <Movie key={peli+idx} data={peli}/> ) : 
                    <h3>No hay resultados para tu busqueda </h3>
                    }
                </article>
                
                         
                       
                <Footer/>
            </React.Fragment>   
        )
    }
}

export default SearchResults;