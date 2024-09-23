import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.state={
            valor: "",
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h1>Resultados para tu busqueda </h1> 
                <Footer/>
            </React.Fragment>   
        )
    }
}

export default SearchResults;