import React ,{ Component } from "react";

class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: ""
        }
        
    }

    evitarSubmit(event){
        event.preventDefault()
    }
    controlarCambios(event) {
        this.setState({ valor: event.target.value})
    }



    render(){
        return(
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <Link to={`/searchResults/${this.state.valor}`}>
                <input type="text" placeholder="Escribir el nombre de una película" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                </Link>

            </form>
        )
    }

    }



export default Busqueda