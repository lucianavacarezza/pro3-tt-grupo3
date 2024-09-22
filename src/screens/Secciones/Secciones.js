import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";

class Secciones extends Component {
    constructor(){
        super();
        this.state= {
            url: window.location.pathname.slice(1,window.location.pathname.length),
            api: "",
            cargador: true,
        }
    }

    

    componentDidMount(){
        let url = this.state.url;
        let apiOk= "";
        
        if(url=== "populars") {
            apiOk="https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} 
        else if (url=== "topRated"){
            apiOk= "https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0"
        }

        this.setState({
            api: apiOk
        })
    }
 


    render(){
        return(
            <React.Fragment>
                <section>
                    {(!this.state.api) ? 
                        <h3 className="cargador">Cargando...</h3> :
                    this.state.url === "populars" ?
                    <article>
                    <h2>Las mas populares</h2>
                    <Movies api={this.state.api}/> 
                    </article> : 
                    <article>
                    <h2>Mejor punteadas</h2>
                    <Movies api={this.state.api}/> 
                    </article>
                    }
                </section>
            </React.Fragment>            
        )
    }
}

export default Secciones

