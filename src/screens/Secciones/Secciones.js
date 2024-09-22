import React, {Component} from "react";
import Movies from "../../components/Movies/Movies";

class Secciones extends Component {
    constructor(){
        super();
        this.state= {
            url: window.location.pathname.slice(1,window.location.pathname.length),
            api: ""
        }
    }

    

    componentDidMount(){
        let url = this.state.url;
        let apiOk= "";
        
        if(url=== "populars") {
        apiOk="https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"} 
        else {}

        this.setState({
            api: apiOk
        })
    }

    



    render(){
        
        return(
            <React.Fragment>
                <section>
                    {this.state.url === "populars" ?
                    <article>
                    <h2>Las mas populares</h2>
                    <Movies api={this.state.api}/> 
                    </article> :

                    <p>hola</p> //si no pongo esto se rompe
                    
                }
                </section>
            </React.Fragment>
            
        )
    }
}

export default Secciones

