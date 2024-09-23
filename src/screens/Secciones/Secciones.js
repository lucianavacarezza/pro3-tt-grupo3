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
        if(window.location.pathname.slice(1)=== "populars") {
            this.setState({
                api: "https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0",
                url: "populars"
            })
            
        } 
        else if (window.location.pathname.slice(1)=== "topRated"){
            this.setState({
                api: "https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0",
                url: "topRated"
            })
        }
    }

    componentDidUpdate(){
        if(window.location.pathname.slice(1)!== this.state.url){
            if(window.location.pathname.slice(1)=== "populars") {
                this.setState({
                    api: "https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0",
                    url: "populars"
                })
            } 
            else if (window.location.pathname.slice(1)=== "topRated"){
                this.setState({
                    api: "https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0",
                    url: "topRated"
                })
            }
        }
    }

    render(){
        console.log(this.state.api);
        console.log(this.state);
        
        
        return(
            <React.Fragment>
                <Header/>
                <section>
                    {(!this.state.api || this.state.url !== window.location.pathname.slice(1)) ? 
                        <h3 className="cargador">Cargando...</h3> :
                    this.state.url === "populars" ?
                    <article>
                    <Movies api={"https://api.themoviedb.org/3/movie/popular?api_key=1f514b0acc26df1dd866c112f7bcb6c0"}/> 
                    </article> : 
                    <article>
                    <Movies api={"https://api.themoviedb.org/3/movie/top_rated?api_key=1f514b0acc26df1dd866c112f7bcb6c0"}/> 
                    </article>
                    }
                </section>
                <Footer/>
            </React.Fragment>            
        )
    }
}

export default Secciones

