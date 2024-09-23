import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Secciones extends Component {
    constructor(props){
        super(props);
        this.state= {
            url: "",
            api: "",
            cargador: true
        }
    }


    componentDidMount(){
        let urlOk = "";
        let apiOk= "";

        console.log(this.props);
        
        
        if(this.props.match.params.seccion === "populars") {
            apiOk="https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0";
            urlOk= "populars"
        } 
        else if (this.props.match.params.seccion === "topRated"){
            apiOk= "https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0";
            urlOk= "topRated"
        }

        this.setState({
            api: apiOk,
            url: urlOk
        })
    }

    componentDidUpdate() {
        let urlOk = "";
        let apiOk= "";

        console.log(this.props);
        
        
        if(this.props.match.params.seccion === "populars") {
            apiOk="https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0";
            urlOk= "populars"
        } 
        else if (this.props.match.params.seccion === "topRated"){
            apiOk= "https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0";
            urlOk= "topRated"
        }

        this.setState({
            api: apiOk,
            url: urlOk
        })
        
    }
    
    


    render(){

        console.log(this.state.api);
        console.log(this.props);
        
        
        
        return(
            <React.Fragment>
                <Header/>
                <section>
                    {(!this.state.api) ? 
                        <h3 className="cargador">Cargando...</h3> :
                    this.state.url === "populars" ?
                    <article>
                    <Movies api={this.state.api}/> 
                    </article> : 
                    <article>
                    <Movies api={this.state.api}/> 
                    </article>
                    }
                </section>
                <Footer/>
            </React.Fragment>            
        )
    }
}

export default Secciones

