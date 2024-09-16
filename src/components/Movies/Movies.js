import React, {Component} from "react";
import Movie from "../Movie/Movie";

class Movies extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            peliculas: []
        }        
    }

    componentDidMount(){
        fetch(this.props.api)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.setState({
                peliculas: data.results
                
            })
        })
        .catch((err)=> console.log(err))
    }

    render(){
        return(
            <React.Fragment>
                <section>
                {this.state.peliculas.slice(0,5).map((peli) => <Movie data = {peli}/>)}
                </section>
            </React.Fragment>
            
        )

    }
}

export default Movies